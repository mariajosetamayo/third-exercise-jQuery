var main = function() {

	$(".day").click(function(){
		//.next selects following div
		$(this).next().toggle("slow");
		//toggleClass: Add or remove one or more classes from each element in the set of matched elements, 
		//depending on either the class's presence or the value of the state argument.
		$(this).find(".weekday span").toggleClass("glyphicon-minus");
	
	});
  
};

$(document).ready(main);