(function() {

	var smtp = require('simplesmtp').createServer({
		debug: true,
	});

	var port = 25;

	function startSmtp () {
		smtp.listen(port, function(err){
			if (err) console.log(err);
		});
	}

	exports = module.exports = startSmtp;
}());