import axios from 'axios'

const load = module => new Promise((resolve, reject) => {
	const local = /^\.{0,2}\//.test(module)
	const path = local ? module : `/node_modules/${module}`
	axios.get(local ? path : `${path}/package.json`)
		.then(response => {
			return local ? response : axios.get(`${path}/${response.data.main || 'index.js'}`)
		})
		.then(response => {
			const module = { exports: {} }
			const func = new Function('exports', 'require', 'module', `${response.data}; return module.exports;`)
			resolve(func(module.exports, window.require, module))
		})
		.catch(error => {
			reject(error)
		})
})

window.require = async function (modules, cb) {
	if (Array.isArray(modules)) {
		try {
			const results = []
			for (const module of modules) {
				results.push(await load(module))
			}
			cb(null, ...results)
		}
		catch (error) {
			cb(error)
		}
	}
	else {
		try {
			cb(null, await load(modules))
		}
		catch (error) {
			cb(error)
		}
	}
}