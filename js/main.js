// Custom JavaScript for my personal website.

// Reset page to top when the page is refreshed.
// https://stackoverflow.com/a/11486546
$(document).ready(function(){
	$('html').animate({scrollTop:0}, 1);
	$('body').animate({scrollTop:0}, 1);
});




/*

	SCROLL REVEAL SETTINGS:
	
	
	https://github.com/jlmakes/scrollreveal
	https://scrollrevealjs.org/

*/

// GENERAL SETTING
window.sr = ScrollReveal({ 
	reset: true 
});

// Custom Settings
sr.reveal(".section"), sr.reveal(".background"), sr.reveal(".skills"), sr.reveal(".experience", {
	duration: 3000 
});



// Button that takes you to the top of the page.
// $(function() {
// 	$('#bottom-button').click(function() {
// 		$('html, body').animate({
// 			scrollTop: $("#top").offset().top
// 		}, 'slow');
// 	});
// });


// Button that takes you to the top of the "skills" section.
$(function() {
	$('#down-button').click(function() {
		$('html, body').animate({
			scrollTop: $("#skills_section").offset().top - 130
		}, 'slow');
	});
});

// Button that takes you to the top of the "experience" section.
$(function() {
	$('#middle-button').click(function() {
		$('html, body').animate({
			scrollTop: $("#experience_section").offset().top - 100
		}, 'slow');
	});
});



$(function() {
	const a = document.getElementById("top-button"),
		d = $("#top-button");
	a.addEventListener("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 500)
	});

});







	
	


