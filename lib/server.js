(function() {
	var express = require('express'),
			app = express(),
      router = express.Router(),
			tester = require('./tester.js'),
			mailer = require('./mailer.js'),
			Promise = require('bluebird');

	var status = [];

	app.set('trust proxy', true);

	app.use(express.static(__dirname + '/../public'));
	// app.use(express.logger('default'));

	router.use(function(req, res, next) {
	  // some logic here, like any other middleware
		// happens on every request to the router
	  // refreshStatus();
	  next();
	});

	router.get('/', function(req, res, next) {
    res.sendFile('/public/index.html');
	});

	router.get('/api/status', function(req, res, next) {
		res.json(status);
	});

	var refreshStatus = function() {
		return new Promise(function(resolve, reject) {
			tester().then(function(data) {
				resolve(status = data);
			});
		});
	};

	var sendMail = function() {
		status.filter(function(d) {
			return d.statusCode.toString().match(/[45]../);
		}).forEach(function(d) {
			mailer(d);
		});
	};

	refreshStatus().then(function() {
		console.log('--- I WOULD LIKE TO SEND AN EMAIL NOW ---');
		// sendMail();
	});

	var statusInterval = setInterval(refreshStatus, 1000 * 60); // 1 minute
	var mailInterval = setInterval(sendMail, 1000 * 60 * 60 * 2); // 2 hours

	app.use('/', router);

	function startServer () {
		app.listen(3456);
		console.log(new Date());
		console.log('\nopen http://localhost:3456');
		console.log('curl -s localhost:3456/api/status\n');
	}

	exports = module.exports = startServer;
}());