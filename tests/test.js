const freonUserAgent = require('../index.js'),
uaParse = require('ua-parser-js'),
assert = require('assert');

const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2';

const req = {
	'headers' : {
		'user-agent' : ua
	}
};

freonUserAgent(req, null, () => { });

assert.deepStrictEqual(req.userAgent, uaParse(ua));

console.log('All tests successfully passed.');