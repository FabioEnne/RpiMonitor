function gDownloads() {
        var url;
	var  jqxhr;
	var dat;
        url = document.URL + 'files';
        jqxhr = $.getJSON(url, function(dat) {
		for(i=0; i<dat.length; i++){
                	$('#downLoad').append('<p>' + dat[i] + '</p>');
		}
		$('#bId').append(dat.length);
        })
	 .done(function() {
		console.log("OK");
	 })
	 .fail(function(data) {
		console.log("Fallito: "+data);
	 })
};