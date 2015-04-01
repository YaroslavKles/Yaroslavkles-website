jQuery(document).ready(function($){
	//put daly one showing the p elements.
	//out daly on showing the h elements in contact container.
	var aboutOffset = $('#aboutMeClicker');
	var aboutHeaderOffset = $('#aboutContainer').offset().top;
	var contactHeaderOffset = $('#contactContainer').offset().top;
	console.log("this worked");
	console.log($(aboutOffset).offset().top);
	console.log($(window).scrollTop());
	console.log(aboutHeaderOffset)

	function aboutShowPTag(){
		$('#aboutContainer').addClass("is-shown-deley");

	}

	function contactShowPTag(){
		$('#contactContainer').addClass("is-shown-deley");
	}

	function contactShowh3Tag(){
		$('#contactContainer').addClass("is-shown-deley2");

	}

	function contactShowh1Tag(){
		$('#contactContainer').addClass("is-shown-deley3");

	}

	$(window).scroll(function(){
		
		if(($(window).scrollTop() >  aboutHeaderOffset - 100 )){
			$('#aboutContainer').addClass("is-shown");
			setTimeout( function(){
				aboutShowPTag();
			} , 500 );
			console.log('This worked');
		}

		

		if($(window).scrollTop() >= contactHeaderOffset - 100 || 
		$(window).scrollTop() + $(window).height() == $(document).height()){
			$('#contactContainer').addClass("is-shown");
			setTimeout( function(){
				contactShowPTag();
			} , 500 );

			
			setTimeout( function(){
				contactShowh3Tag();
			} , 1000 );

			
			setTimeout( function(){
				contactShowh1Tag();
			} , 1500 );
			



		}


	})

	
});




