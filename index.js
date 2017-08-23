const uaParse = require('ua-parser-js');

module.exports = (req, res, next) => {
	Object.defineProperty(req, 'userAgent', {
		get: function() {
			if (this.___userAgent) {
				return this.___userAgent;
			} else {
				this.___userAgent = uaParse(this.headers['user-agent']);
				return this.___userAgent;
			}
		}
	});

	next();
};