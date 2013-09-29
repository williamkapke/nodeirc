var marked = require('marked'),
	jade = require('jade'),
	fs = require('fs'),
	path = require('path'),
	readme = marked(fs.readFileSync(__dirname+'/README.md').toString()),
	html = jade.renderFile('index.jade', {readme: readme, pretty:true})
;

fs.writeFileSync('index.html', html)
