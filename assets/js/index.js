(function($){
	$('#selfpic').mouseover(function(){
		$(this).attr('src','images/color.jpg')
	}).mouseout(function(){$(this).attr('src','images/black.jpg')})
})(jQuery)
