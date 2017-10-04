// Strike off selected todo.
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

// Click to delete todo
$("ul").on("click","span",function (event) {
	$(this).parent().fadeOut(500,function () {
		$(this).remove();
	});
	event.stopPropogation;
});

$("input[type='text'").keypress(function (event) {
	if(event.which === 13){
		// take the text from input
		var todoText = $(this).val();
		$(this).val("");
		//create li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});

$(".fa-plus").click(function () {
	$("input[type='text'").fadeToggle();
});

