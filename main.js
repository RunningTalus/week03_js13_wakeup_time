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

	var display = $('<div class = "display">');
	$('.clock').append(display);
	$('.display').css({
		backgroundColor: 'firebrick',
		borderRadius: '50px',
		height: '300px',
		left: '150px',
		position: 'absolute',
		top: '75px',
		width: '550px'
	});

	var bottomDisplay = $('<div class = "bottomDisplay">');
	$('.display').append(bottomDisplay);
	$('.bottomDisplay').css({
		border: 'solid',
		color: 'purple',
		height: '175px',
		left: '-25px',
		top: '300px',
		position: 'absolute',
		width: '600px'
	});

	var am = $('<div class = "am">');
	$('.bottomDisplay').append(am);
	$('.am').css({
		border: 'solid',
		color: 'turquoise',
		height: '60px',
		position: 'absolute',
		width: '594px'

	});

	var fm = $('<div class = "fm">');
	$('.am').append(fm);
	$('.fm').css({
		border: 'solid',
		color: 'chartreuse',
		height: '60px',
		left: '-3px',
		position: 'absolute',
		top: '60px',
		width: '594px'
	});
	
	var slider = $('<div class = "slider">');
	$('.fm').append(slider);
	$('.slider').css({
		border: 'solid',
		color: 'deeppink',
		height: '40px',
		left: '-3px',
		position: 'absolute',
		top: '60px',
		width: '594px'
	});







});



// var clock = $('<div class ="clock-shell"></div>');

// $(document).ready(function(){
// 	('.clock-shell').css({
// 		'position': 'absolute',
// 		'color': 'black',
// 		'width': '200px'});
// });