$(document).ready(function() {
	$("html").removeClass('no-js');
	$('#nav').onePageNav({
		currentClass: 'active',
	    changeHash: true,
	    scrollSpeed: 750,
	    filter: ':not(.external)',
		easing: 'swing',
	});
});
