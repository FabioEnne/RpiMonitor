var ip;

var express = require('express');
var app = express();
exec("sudo /sbin/ifconfig eth0 | grep 'inet addr:' | cut -d: -f2 | awk '{print $1}'", function(error, stdout, stderr){
	ip = stdout;
	console.log(ip);
});

function uptime() {
    var url;
	var  jqxhr;
	var dat;
        url = 'http://192.168.1.6:3000/' + 'up';
        jqxhr = $.getJSON(url, function(dat) {
                $('#uptempo').html('<h5>' + dat[0].uptime + '</h5>');
                $('#divTemp').html('<h3>' + dat[1].temp + '</h3>');
        })
	 .done(function() {
		console.log("OK");
	 })
	 .fail(function(data) {
		console.log("Fallito: "+data);
	 })
};