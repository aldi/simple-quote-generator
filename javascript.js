//FORISMATIC API
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
	$(".quote-text").text(data.quoteText);
	var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author: ' + data.quoteAuthor;
	if (data.quoteAuthor === '') {
		data.quoteAuthor = 'Unknown';
	}
	$(".quote-author").text('Author: ' + data.quoteAuthor);
	$(".twitter-button").attr("href", quot);
};

//Initialize
$(document).ready(function() {
	$.getJSON(url, getQuote, 'jsonp');

});

//Quote button onclick
$("#quote").click(function() {
	$(".quote-text").fadeOut(20);
	$.getJSON(url, getQuote, 'jsonp');
	$(".quote-text").fadeIn(1000);
});
