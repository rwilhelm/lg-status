(function() {
  var nodemailer = require('nodemailer'),
      smtpTransport = require('nodemailer-smtp-transport');

  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 2525,
    auth: {
      user: 'asdf',
      pass: 'bla'
    }
  });

  // setup e-mail data with unicode symbols
  var options = {
      // from: 'lg-wp1-dev@list.uni-koblenz.de', // sender address
      // from: 'status@liveandgov.uni-koblenz.de', // sender address
      // from: 'LiveGovWP1 Mailer Daemon <asdf@uni-koblenz.de>', // sender address
      from: 'asdf@uni-koblenz.de', // sender address
      // to: 'rene.wilhelm@gmail.com', // list of receivers
      to: 'rene.wilhelm@gmail.com', // list of receivers
      // to: 'rene.wilhelm@gmail.com, rene.wilhelm@uni-koblenz.de, lg-wp1-dev@list.uni-koblenz.de', // list of receivers
  };

  function mailer(service) {
    options.subject = '[LiveGovWP1] SERVICE FAILURE: ' + service.path;
    options.text = JSON.stringify(service, null, 2);
    // options.html = '<h1>SERVICE FAILED TO RESPOND</h1><h2>' + service.uri + '</h2><h3 style="padding: 24px; margin: 24px; border: 1px solid #fc4807; background-color: #ffebe4">' + service.code + ' ' + service.message + '</h3><pre style="font-size: 1.2em">' + JSON.stringify(service, null, 2) + '</pre>';

    transporter.sendMail(options, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Message sent: ' + info.response);
      }
    });
  }

  exports = module.exports = mailer;
}());