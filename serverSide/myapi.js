var http = require('http');
var express = require('express');
var handler;
var app = express();

var exec = require('child_process').exec, child;
var ip;
var fs = require('fs');
var infos;
var uptime
var filesD = [];
var pathA = require('path');
var path = "/media/pi/01D16F03D7563070/movies";
var temp;

app.use(express.static(pathA.resolve(__dirname, '../clientSide')));
app.use('./static', express.static('public'));

exec("sudo /sbin/ifconfig eth0 | grep 'inet addr:' | cut -d: -f2 | awk '{print $1}'", function(error, stdout, stderr){
	ip = stdout;
			exports.ipAdd = ip;
			console.log(ip);
});

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


//UPTIME
app.get('/up', function(req, res) {
	child = exec("uptime -p | grep 'up ' | cut -d ' ' -f2-", function(error, stdout, stderr){
					uptime = stdout;
				});
	child = exec("/opt/vc/bin/vcgencmd measure_temp | grep 'temp=' | cut -d '=' -f3,2-", function(error, stdout, stderr){
					temp = stdout;
					console.log(temp);
				}); 
	infos = [{uptime: uptime}, {temp: temp}]; 
	res.status(200).send(infos);
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

