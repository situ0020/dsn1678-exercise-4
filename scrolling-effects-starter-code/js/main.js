var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center' + scrollPos / 2 + 'px');
});