# @freon-plugins/user-agent
Freon plugin to parse the user agent header

Installation:
```
npm install @freon-plugins/user-agent
```

Usage:
```javascript
// ... create a Freon application ...

app.plugin(require('@freon-plugins/user-agent'));
```

## Properties added to the request object
- `userAgent: Object` - parsed user agent header

This should be object similar to
```
{
	ua: "...",
	browser: {
		name: "...",
		version: "..."
	},
	engine: {
		name: "...",
		version: "..."
	},
	os: {
		name: "...",
		version: "..."
	},
	device: {
		model: "...",
		type: "...",
		vendor: "..."
	},
	cpu: {
		architecture: "..."
	}
}
```

For more information, see the [`ua-parser-js`](https://www.npmjs.com/package/ua-parser-js) module.