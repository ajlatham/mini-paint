$(document).ready(function(){
	var color = 'White';
	var colors = 'White green blue yellow red';

	$('.box').on('click', function(){
		$(this).addClass(color);
	})

	$('.box').on('dbclick', function(){
		$(this).removeClass(colors);
	})

	$('#reset').on('click', function(){
		$('.box').removeClass(colors);
	})

	$('#red').on('click', function(){
		color = 'red';
	})

	$('#blue').on('click', function(){
		color = 'blue';
	})

	$('#green').on('click', function(){
		color = 'green';
	})

	$('#yellow').on('click', function(){
		color = 'yellow';
	})

	$('#white').on('click', function(){
		color = 'White';
	})


})