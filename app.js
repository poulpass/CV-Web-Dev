$(document).ready(function(){

	$("#side").hover(function(){
		$("#p1").animate({width: "100px"}, 250);
		$("#p2").animate({width: "100px"}, 250);
		$("#p3").animate({width: "100px"}, 250);
		$("#p4").animate({width: "100px"}, 250);
		$(".lunettes").animate({width: "100px",left: "50px"}, 250);
 

	});

	$("#general").hover(function(){
		$("#p1").animate({width: "135px"}, 250);
		$("#p2").animate({width: "65px"}, 250);
		$("#p3").animate({width: "135px"}, 250);
		$("#p4").animate({width: "65px"}, 250);
		$(".lunettes").animate({width: "85px",left: "91px"}, 250);
	});
	$(".subtitle").animate({width: "100%"}, 500);
	$(".pastille").animate({width: "50px"}, 500);
	$(".pastille").animate({height: "50px"}, 500);


	//$("h3").delay(800).fadeIn (500);
	$(".divContent ").delay(800).animate({height: "75%"},500);

	$("h3, .coeur, .skill, p,  li, tr,.hidden").delay(800).fadeIn (500);


	//$(".coeur").delay(800).fadeIn (500);

});



