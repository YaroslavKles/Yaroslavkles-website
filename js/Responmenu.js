var portfoiloBotton = $('#index-clicked');
var aboutBotton = $('#about-clicked');
var contactBotton = $('#contact-clicked');
var portfoiloOffset = $('#portfoiloContainer h1');
var aboutOffset = $('#aboutMeClicker');
var contactOffset = $('#contactMeClicker');
var topMenuContent = $('.topNav ul');


function autoScrollResponsive(element){
	if ( element === contactOffset ){
			$('html, body').animate({
		scrollTop: $(element).offset().top - 50
		}, 1000);
		}else if (element === aboutOffset ){
			$('html, body').animate({
				scrollTop: $(element).offset().top - 50
			}, 1000);
		}else if ( element === portfoiloOffset){
			
			
			$('html, body').animate({
			scrollTop: 0
			}, 1000);
		}
}

function hideMenu(){
	$(topMenuContent).hide();
}

//onClick events go here.

$(portfoiloBotton).on('click' , function(){
	autoScrollResponsive(portfoiloOffset);
	hideMenu();
})
$(aboutBotton).on('click' , function(){
	autoScrollResponsive(aboutOffset);
	hideMenu();
})
$(contactBotton).on('click' , function(){
	autoScrollResponsive(contactOffset);
	hideMenu();
})