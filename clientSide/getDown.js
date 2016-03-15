function gDownloads() {
    var url;
	var  jqxhr;
	var dat;
        url = document.URL + 'files';
        jqxhr = $.getJSON(url, function(dat) {
		for(i=0; i<dat.length; i++){
                	$('#tData').append('<tr><td class="text-left">' + dat[i] + '</td></tr>');
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