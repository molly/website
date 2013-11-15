//LOGO FUNCTIONS
/* Draws the "12.0" dimension of the M-height */
function drawLeftDimension(c){
	var path1, path2, text1;
    path1 = c.path("m 34.695699,92.810621");
    path1.attr({'fill': "#000000"});
    path2 = c.path("m 34.695699,110.15847");
    path2.attr({'fill': "#000000"});
    text1 = c.text(30.334894, 101.88696, "12.0");
    text1.attr({'font-size': 14, 'opacity': 0});
    
    path1.animate({path:"m 34.695699,92.810621 0,-41.728611 2.813165,0\
    -2.813165,-7.970634 -3.282025,7.970634 2.813164,0 z"}, 200);
    path2.animate({path: "m 34.695699,110.15847 0,45.01064 3.750887,0\
    -3.750887,7.97063 -3.572985,-7.90579 3.282025,0 z"}, 200,
    function(){text1.animate({opacity: 1}, 200)});
}

/* Draws the "0.5" dimension of the ascender height */
function drawTinyDimension(c){
	var path1, path2, text1;
    path1 = c.path("m 213.30331,18.98509");
    path1.attr({'fill': "#000000"});
    path2 = c.path("m 213.1254,56.166401");
    path2.attr({'fill': "#000000"});
    text1 = c.text(189.56172,35.835869, "0.05");
    text1.attr({'font-size': 14, 'opacity': 0});
    
    path1.animate({path:"m 213.30331,18.98509 0,10.318259 2.49061,0\
    -2.13481,5.514931 -2.84642,-5.692832 2.49062,0 z"}, 200);
    path2.animate({path: "m 213.1254,56.166401 0,-7.649744 -1.95691,0\
    2.13482,-5.159129 1.77901,5.159129 -2.13482,-0.177901 z"}, 200,
    function(){text1.animate({opacity:1}, 200)});
}

/* Draws the "85.0" dimension of the logo */
function drawLengthDimension(c){
	var path1, path2, text1;
    path1 = c.path("m 385.05747,207.71264");
    path1.attr({'fill': "#000000"});
    path2 = c.path("m 422.08589,207.71264");
    path2.attr({'fill': "#000000"});
    text1 = c.text(404,207.71264, "85.0");
    text1.attr({'font-size': 14, 'opacity': 0});
    
    path1.animate({path:"m 385.05747,207.71264 -320.640292,0 0,-3.24025\
    -9.202454,3.68098 9.509202,2.45399 0,-3.06748 z"}, 400);
    path2.animate({path: "m 422.08589,207.71264 309.20245,0 -0.30674,-3.37424\
    9.5092,4.29448 -9.20246,3.06749 -0.30674,-3.98773 z"}, 400,
    function(){text1.animate({opacity:1}, 200)});
}

/* Draws the "3.5" dimension of the space */
function drawMidDimension(c){
	var path1, path2, text1;
    path1 = c.path("m 358.89571,71.650307");
    path1.attr({'fill': "#000000"});
    path2 = c.path("m 375.15338,71.343558");
    path2.attr({'fill': "#000000"});
    text1 = c.text(366.49693,60.343558, "3.5");
    text1.attr({'font-size': 14, 'opacity': 0});
    
    path1.animate({path:"m 358.89571,71.650307 -4.29448,0 0,-3.374233\
    -7.97546,3.067484 7.97546,3.374234 0,-3.067485 z"}, 400);
    path2.animate({path: "m 375.15338,71.343558 5.52147,0 0,-3.374233\
    5.82822,3.374233 -5.82822,2.760736 0,-2.760736 z"}, 400,
    function(){text1.animate({opacity:1}, 200)});
}

/* Draws the "90˚" angle of the W */
function drawWArc(c){
	var path1, path2, path3, text1;
    path1 = c.path("m 482.24816,175.63187");
    path2 = c.path("m 407.05521,175.63803");
    path3 = c.path("m 476.68712,175.33129");
    path2.attr({'fill': "#000000"});
    path3.attr({'fill': "#000000"});
    text1 = c.text(442.94479,179.56442, "90.0˚");
    text1.attr({'font-size': 14, 'opacity': 0});
    
    path1.animate({path:"m 482.24816,175.63187 a 49.386501,41.411041 0 0 1\
    -77.2984,-1.85619"}, 150);
    path2.animate({path: "m 407.05521,175.63803 2.14724,-2.14723\
    -7.66871,-2.76074 2.454,7.66872 z"}, 200); 
    path3.animate({path: "m 476.68712,175.33129 4.29447,5.52147\
    4.60123,-6.74846 z"}, 200, function(){text1.animate({opacity:1}, 200)});
}

/* Draws the "150˚" angle of the y */
function drawYArc(c){
	var path1, path2, path3, text1;
    path1 = c.path("M 296.83532,180.01846");
    path2 = c.path("m 291.41104,129.62577");
    path3 = c.path("m 292.94479,182.07975");
    path2.attr({'fill': "#000000"});
    path3.attr({'fill': "#000000"});
    text1 = c.text(265,180, "150.0˚");
    text1.attr({'font-size': 14, 'opacity': 0});
    
    path1.animate({path:"M 296.83532,180.01846 A 29.754601,29.907976 0 0 1\
    294.5688,132.16307"}, 150);
    path2.animate({path: "m 291.41104,129.62577 4.29448,6.13497\
    3.68098,-6.74847 z"}, 200); 
    path3.animate({path: "m 292.94479,182.07975 4.29447,-6.13497\
    3.68098,6.74847 z"}, 200, function(){text1.animate({opacity:1}, 200)});
}

/* Calls each of the animations*/
window.onload = function() {
	window.c = Raphael("logo", 800, 233);
	if (window.innerWidth >= 800){
		//LOGO FUNCTIONS
		if (window.c){setTimeout(function(){drawLeftDimension(window.c);}, 500);}
		if (window.c){setTimeout(function(){drawWArc(window.c);}, 800);}
		if (window.c){setTimeout(function(){drawLengthDimension(window.c);}, 1200);}
		if (window.c){setTimeout(function(){drawYArc(window.c);}, 1800);}
		if (window.c){setTimeout(function(){drawTinyDimension(window.c);}, 2000);}
		if (window.c){setTimeout(function(){drawMidDimension(window.c);}, 2500);}
	}
	else {
		small();
	}
};

window.onresize = function() {
	if (window.innerWidth < 800){
		small();
	}	
}

function small() {
	window.c.canvas.setAttribute("display", "none");
	document.getElementById("logo").style.display = "none";
	document.getElementById("logosmall").style.display = "block";
}