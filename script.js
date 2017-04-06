$(document).ready(function() {

	$.get( "http://date.jsontest.com/", function( data ) {
        $("#datum").text(data.date);
        $("#vreme").text(data.time);
	});
});