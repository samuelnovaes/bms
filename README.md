# BMS
An asynchronous module system for browser

# Usage
- [Download bms.js]()
- Include bms.js in your HTML
```html
<script src="bms.js"></script>
```

# Creating modules
You can use CommonJS syntax to export values (Like in Node.js)
```javascript
module.exports = "Hello World!";
```
```javascript
exports.hello = "Hello";
exports.world = "World!";
```

# Importing a module
```javascript
require("./foo.js", function(err, foo){
	if(err) throw err;
	console.log(foo);
});
```

# Importing many modules
```javascript
require(["./foo.js", "./bar.js", "baz.js"], function(err, foo, bar, baz){
	if(err) throw err;
	console.log(foo);
	console.log(bar);
	console.log(baz);
});
```

# Importing module from `node_modules` directory
```javascript
require("foo", function(err, foo){
	console.log(foo);
});
```

# Importing module relative to root path
```javascript
require("/dir/foo.js", function(err, foo){
	console.log(foo);
});
```