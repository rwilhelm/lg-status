(function() {
	config = {
		website: {
			port: 3456
		},
		services: [
			// SENSOR STORAGE SERVICES
			{
				type: 'storage',
				uri: 'http://liveandgov.uni-koblenz.de/storage/upload',
				text: 'Upload Servlet'
			},
			{
				type: 'storage',
				uri: 'http://liveandgov.uni-koblenz.de/storage/inspection',
				text: 'Inspection Front End'
			},
			{
				type: 'storage',
				uri: 'https://github.com/Institute-Web-Science-and-Technologies/LiveGovWP1/wiki/Upload-Servlet',
				text: 'Wiki: Upload Servlet',
				disabled: true
			},

			// SERVICE LINE DETECTION
			{
				type: 'sld',
				uri: 'http://liveandgov.uni-koblenz.de/sld/test',
				text: 'Route Tester'
			},
			{
				type: 'sld',
				uri: 'http://liveandgov.uni-koblenz.de/sld/api',
				text: 'SLD API'
			},
			{
				type: 'sld',
				uri: 'http://liveandgov.uni-koblenz.de/sld/bla',
				text: 'This will fail'
			},
			{
				type: 'sld',
				uri: 'https://github.com/Institute-Web-Science-and-Technologies/LiveGovWP1/wiki/Service-Line-Detection',
				text: 'Wiki: Service Line Detection',
				disabled: true
			},

			// HUMAN ACTIVITY RECOGNITION
			{
				type: 'har',
				uri: 'http://liveandgov.uni-koblenz.de/har/live',
				text: 'Live Inspection Tool (ZMQ port 5555)'
			},
			{
				type: 'har',
				uri: 'http://liveandgov.uni-koblenz.de:3002',
				text: 'HAR Inspection Tool'
			},
			{
				type: 'har',
				uri: 'http://liveandgov.uni-koblenz.de/har/api',
				text: 'HAR API'
			},
			{
				type: 'har',
				uri: 'https://github.com/Institute-Web-Science-and-Technologies/LiveGovWP1/wiki/Har-Service',
				text: 'Wiki: HAR Service',
				disabled: true
			},
		],
	};

	exports = module.exports = config;
}());