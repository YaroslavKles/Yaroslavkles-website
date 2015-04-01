var aboutOffset = $('#aboutMeClicker');

function FadeIn () {
	if ( $(aboutOffset).top === $(window).scrollTop()){
		$(aboutOffset).addClass("is-shown");
	} 
}

$(window).scroll(){
	FadeIn();
}