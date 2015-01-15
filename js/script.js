 $(document).ready(function() {

 	//ID in variabele steken
 	var rightArrow = $('#right-arrow');
 	var topArrow = $('#top-arrow')
 	var leftArrow = $('#left-arrow');
 	var bottomArrow = $('#bottom-arrow')

 	//href uithalen en in andere variabele steken
 	rightUrl = rightArrow.attr("href");
 	topUrl = topArrow.attr("href");
 	leftUrl = leftArrow.attr("href");
 	bottomUrl = bottomArrow.attr("href");

 	console.log("Bottom= " + bottomUrl, "Left= " +  leftUrl, "Right= " +  rightUrl,"Top= " +  topUrl);

 	//als keyboard wordt gebruikt gaat hij checken welke
 	//key is ingedrukt en naargelang de key, gaat hij een
 	//ander functie uitvoeren 
 	$(document).on("keydown", function(evt){
 		var code = evt.keyCode;
 		console.log(code);

 		switch(code) {
 			case 37:
 				leftArrow();
 				break;
 			case 38:
 				topArrow();
 				break;
 			case 39:
 				rightArrow();
 				break;
 			case 40:
 				bottomArrow();
 				break;
 		}

 		//functie uitvoeren die bij keycode hoort
 		//als url undefined is --> niets doen
 		function leftArrow(){
 			if(leftUrl != undefined){
 				window.location = leftUrl;
 			}
	 	}

	 	function topArrow(){
	 		if(topUrl != undefined){
 				window.location = topUrl;
 			}
	 	}

	 	function rightArrow(){
	 		if(rightUrl != undefined){
 				window.location = rightUrl;
 			}
	 	}

	 	function bottomArrow(){
	 		if(bottomUrl != undefined){
 				window.location = bottomUrl;
 			}
	 	}
 	});

 	$('.subscribe').on('click', function(e) {
		e.preventDefault();

		$('.modal-container.modal-effect-1').addClass('modal-show');

		$('.modal-close').on("click", function(){
			$('.modal-container.modal-effect-1').removeClass('modal-show');
		});

		$('.modal-overlay').on("click", function(){
			$('.modal-container.modal-effect-1').removeClass('modal-show');
		});
	});
 });