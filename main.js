$(document).ready(function(){
	
	$('.container').css({
		backgroundColor: 'darkslategray',
		height: '600px',
		position: 'relative',
		width: '900px'
	});

	var clock = $('<div class = "clock">');
	$('.container').append(clock);
	$('.clock').css({
		backgroundColor: 'black',
		borderRadius: '50px',
		height: '550px',
		left: '25px',
		position: 'absolute',
		top: '25px',
		width: '850px'
	});

	var pmAuto = $('<div class = "pmAuto">');	
	$('.clock').prepend(pmAuto);
	$('.pmAuto').html('<p>PM</p> <b></b> <p>AUTO</p>');

	$('.pmAuto').css({
		border: 'solid',
		color: 'white',
		fontFamily: 'Lucida Sans Typewriter',
		fontSize: '1.25em',
		height: '275px',
		position: 'absolute',
		textAlign: 'right',
		top: '100px',
		width: '150px'
	});

	var display = $('<div class = "display">');
	$('.clock').append(display);
	$('.display').css({
		backgroundColor: 'firebrick',
		borderRadius: '25px',
		height: '300px',
		left: '150px',
		position: 'absolute',
		top: '75px',
		width: '550px'
	});



	// var myVar = setInterval(function(){myTimer()}, 1000);
	// 	function myTimer(){
	// 	var d = new Date();
	// 	var t = d.toLocaleTimeString();
	// 	$(document).get('.display') = t;
	// };

	var bottomDisplay = $('<div class = "bottomDisplay">');
	$('.display').append(bottomDisplay);
	$('.bottomDisplay').css({
		// border: 'solid',
		// color: 'purple',
		height: '175px',
		left: '-25px',
		top: '300px',
		position: 'absolute',
		width: '600px'
	});

	var am = $('<div class = "am">');
	$('.bottomDisplay').append(am);
	$('.am').css({
		// border: 'solid',
		// color: 'turquoise',
		height: '60px',
		position: 'absolute',
		width: '594px',
	});

	var amText = $('.am').prepend('<p class = "amTextField"></p>');
	$('.amTextField').html('<span> AM  </span><span> 53 </span><span> 60 </span><span> 70 </span><span> 90 </span><span> 140 </span><span> 170 </span><span>  x10 KHz </span>');
	$('.amTextField').css({
		color: 'white',
		fontFamily: 'Lucida Sans Typewriter',
		fontSize: '1.25em',
		height: '50px',
		position: 'absolute',
		textAlign: 'center',
		top: '25px',
		width: '590px',
	});


	var fm = $('<div class = "fm">');
	$('.am').append(fm);
	$('.fm').css({
		// border: 'solid',
		// color: 'chartreuse',
		height: '60px',
		left: '-3px',
		position: 'absolute',
		top: '60px',
		width: '594px'
	});

	var fmText = $('.fm').prepend('<p class = "fmTextField"></p>');
	$('.fmTextField').html('<span> FM  </span><span> 92 </span><span> 96 </span><span> 102 </span><span> 106 </span><span> 108 </span><span>     MHz </span>');
	$('.fmTextField').css({
		color: 'white',
		fontFamily: 'Lucida Sans Typewriter',
		fontSize: '1.25em',
		height: '50px',
		position: 'absolute',
		textAlign: 'center',
		top: '0px',
		width: '590px'
	});
	
	var sliderBox = $('<div class = "sliderBox">');
	$('.fm').after(sliderBox);
	$('.sliderBox').text('.');
	$('.sliderBox').css({
		border: 'solid',
		backgroundColor: 'darkslategray',
		height: '20px',
		left: '150px',
		position: 'absolute',
		top: '130px',
		width: '300px'
	});

	var sliderBubble = $('<div class = "sliderBubble">');
	$('.sliderBox').prepend(sliderBubble);
	$('.sliderBubble').css({
		backgroundColor: 'firebrick',
		borderRadius: '50%',
		height: '18px',
		left: '50px',
		position: 'absolute',
		top: '-2px',
		width: '20px',
		zIndex: '1'
	})
	
});