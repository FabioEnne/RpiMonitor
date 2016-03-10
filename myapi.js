var http = require('http');
var express = require('express');
var app = express();
var exec = require('child_process').exec, child;
var fs = require('fs');
var jUptime;
var filesD = [];
var path = "/media/pi/01D16F03D7563070/movies";

app.use(express['static'](__dirname ));

app.get('/files', function(req, res) {
	fs.readdir(path, function(err, files) {
		if (err){
			console.log("Non riesco a leggere i files");
		}
		
		filesD=files;
		console.log(filesD);
		
	});
	res.status(200).send(filesD);
});

app.get('/up', function(req, res) {
	child = exec("uptime -p", function(error, stdout, stderr){
					jUptime = [{uptime: stdout}];
				});
	res.status(200).send(jUptime);
});

app.get('*', function(req, res) {
	res.status(404).send('Richiesta non riconosciuta');
});

app.use(function(err, req, res, next) {
	if (req.xhr) {
		res.status(500).send('Qualcosa è andato storto');
	} else {
		next(err);
	}
});
app.listen(3000);
console.log('Server attivo sulla porta 3000');

