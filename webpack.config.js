const path = require('path')
module.exports = {
	entry: ['babel-polyfill', './src/bms.js'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bms.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		]
	}
}