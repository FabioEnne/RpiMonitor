function uptime() {
        var url;
	var  jqxhr;
	var dat;
        url = document.URL + 'up';
        jqxhr = $.getJSON(url, function(dat) {
                $('#uptempo').html('<p>Tempo di attività: ' + dat[0].uptime + '</p>');
        })
	 .done(function() {
		console.log("OK");
	 })
	 .fail(function(data) {
		console.log("Fallito: "+data);
	 })
};

