jQuery(document).ready(function($){
	var topMenuBotton = $('#pull');
	var topMenuContent = $('.topNav ul');
	var smartMenuBotton = $("#bottonTrigger");
	var offset = 190;
	var portfoiloOffset = $('#portfoiloContainer h1');
	var aboutOffset = $('#aboutMeClicker');
	var contactOffset = $('#contactMeClicker');
	var porfiloClickedDesktop = $('#slideOutMenu li:nth-child(2)');
	var contactClickedDesktop = $('#slideOutMenu li:nth-child(3)');
	var aboutClickedDesktop = $('#slideOutMenu li:nth-child(4)');
	var topbarPortfoilo = $('#cd-main-nav li:nth-child(1)');
	var topbarAbout = $('#cd-main-nav li:nth-child(2)');
	var topbarContact = $('#cd-main-nav li:nth-child(3)');
	var aboutHeaderOffset = $('#aboutContainer').offset.top;
	console.log(topbarPortfoilo);

	//click event for slide menu.

	$(topMenuBotton).on('click', function(e){

		e.preventDefault();
		topMenuContent.slideToggle();
		console.log("this ran");
	});

	$(smartMenuBotton).on('click' , function(e){
		// e.preventDefault();
		$('#pageBody').toggleClass('menuOpened');
		console.log("shown");
	});

	function checkOpened(){
		if ($('#pageBody').hasClass('menuOpened')){
			$('#pageBody').removeClass('menuOpened');
		}
	}

	$(window).scroll(function(){
		// console.log(aboutClickedDesktop)
		if ($(window).scrollTop() > offset ){
			$('#bottonTrigger').addClass("is-shown");
		}
		else if ($(window).scrollTop() < offset){
			$('#bottonTrigger').removeClass('is-shown');
		}
		if ($(window).scrollTop() < offset && 
		$('#pageBody').hasClass('menuOpened')){
				$('#pageBody').removeClass('menuOpened');
				console.log("removed");
		};
		if ($(window).width() <= 768 ){
			$('#bottonTrigger').removeClass('is-shown');
			console.log('removed')
		}
	});

	//Mouse over effects will go here.
	$(smartMenuBotton).hover(function(){
		 $(smartMenuBotton).css("height", "50px")
	} , function(){
		 $(smartMenuBotton).css("height", "44px")
	})

	//scroll adimations will go here.

	function autoScrollDesktop( element ){
		if ( element === contactOffset ){
			$('html, body').animate({
		scrollTop: $(element).offset().top
		}, 1000);
		}else if (element === aboutOffset ){
			$('html, body').animate({
				scrollTop: $(element).offset().top
			}, 1000);
		}else if ( element === portfoiloOffset){
			
			
			$('html, body').animate({
			scrollTop: $(element).offset().top
			}, 1000);
		}
	}

	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if(($(window).scrollTop() > aboutHeaderOffset )){
			$('#aboutContainer').addClass("is-shown");
			console.log('This worked');
		}	
	});

	//onclick events go here.
	$(porfiloClickedDesktop).on('click' , function(){
		autoScrollDesktop(portfoiloOffset);
		checkOpened();
	})
	$(aboutClickedDesktop).on('click' , function(){
		autoScrollDesktop(contactOffset);
		checkOpened();
	})
	$(contactClickedDesktop).on('click' , function(){
		autoScrollDesktop(aboutOffset);
		checkOpened();
	})
	$(topbarPortfoilo).on('click' , function(){
		autoScrollDesktop(portfoiloOffset);
		checkOpened();
		console.log('This worked');

	})
	$(topbarContact).on('click' , function(){
		autoScrollDesktop(contactOffset);
		checkOpened();
		console.log('This worked');
	})
	$(topbarAbout).on('click' , function(){
		autoScrollDesktop(aboutOffset);
		checkOpened();
		console.log('This worked');
	})

})//end here.
