const freonUserAgent = require('../index.js'),
assert = require('assert');

const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2';

const req = {
	'headers' : {
		'user-agent' : ua
	}
};

const expectedResult = {
	ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2',
	browser: { name: 'Chromium', version: '15.0.874.106', major: '15' },
	engine: { name: 'WebKit', version: '535.2' },
	os: { name: 'Ubuntu', version: '11.10' },
	device: { vendor: undefined, model: undefined, type: undefined },
	cpu: { architecture: 'amd64' }
};

freonUserAgent(req, null, () => { });

assert.deepStrictEqual(req.userAgent, expectedResult);

console.log('All tests successfully passed.');
