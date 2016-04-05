 $("#submit").on("click", function() {

	$("input[type")

 });

$(document).ready(function() {
	$("input[name=num]").on("focus", function() {


		alert("Your Phone isnt long enough");

	});

$("input[name=url]").on("blur", function(){
	var check = $(this)[0].checkValidity();

	$(this)[0].setCustomValidity("Use a complete url http://www.myurl.com")

	if (check == false){
		$(this).after($(this)[0].validationMessage;
	}

	$("input[name=other]").("keydown", function(event) {

			if(event.which ==13){
				$("submit").click();

			}
	})

});

});