(function() {

	var server = require('./lib/server'),
			smtp =  require('./lib/smtp');

	var chalk = require('chalk'),
			util = require('util');

	var domain = require('domain').create();

	domain.on('error', function(err) {
	  console.error(chalk.bold.white.bgRed("EXCEPTION CAUGHT"), err);
	});

	domain.run(function() {
		server();
		// smtp();
	});

}());