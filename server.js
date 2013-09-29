var static = require('node-static');
var file = new static.Server('./', { cache: false });

require('http').createServer(function (request, response) {
	request.addListener('end', function () {
		file.serve(request, response);
	}).resume();
}).listen(4000);

console.log('Listening on port 4000');
