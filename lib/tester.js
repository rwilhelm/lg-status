(function() {
	var	request = require('request'),
			Promise = require('bluebird'),
			mailer = require('./mailer'),
			services = require('../config.js').services;

	function testService(service) {
		var start = new Date();

		return new Promise(function(resolve, reject) {
			var returnObj = function(res) {
				return {
					uri: service.uri,
					text: service.text,
					type: service.type,
					path: service.uri.split('/').splice(3).join('/'),
					statusCode: res ? res.statusCode : '',
					statusMessage: res ? res.statusMessage : '',
					online: res ? res.statusCode >= 200 && res.statusCode < 400 : '',
					wiki: !!service.uri.match(/wiki/),
					responseTime: (new Date() - start) + ' ms',
					date: new Date().toString(),
			 	};
			};

			if (service.disabled) resolve(returnObj());

			request(service.uri, function(err, res, body) {
				resolve(returnObj(res));
			}).on('error', function(e) {
			  console.error(e);
			});
		});
	}

	var tester = function() {
 		return new Promise.map(services, function(service) {
 		  return testService(service);
		}).then(function(data) {
			return data;
		});
	};

	exports = module.exports = tester;
}());
