$(document).ready(function(){
	
	$('.container').css({
		backgroundColor: 'dimgray',
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



});



// var clock = $('<div class ="clock-shell"></div>');

// $(document).ready(function(){
// 	('.clock-shell').css({
// 		'position': 'absolute',
// 		'color': 'black',
// 		'width': '200px'});
// });