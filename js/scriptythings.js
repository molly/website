$(document).ready(function() {
  var grossReferer = /https?:\/\/www\.returnofkings\.com/
  if (grossReferer.test(document.referrer)) {
    window.location.href = "http://www.mollywhite.net/rok.html";
  }
  else {
  	$("html").removeClass('no-js');
  	$('#nav').onePageNav({
  		currentClass: 'active',
  	    changeHash: true,
  	    scrollSpeed: 750,
  	    filter: ':not(.external)',
  		easing: 'swing',
  	});
  }
});
