$(document).ready(function() {
    
    //JQUERY FUCNTION 1
    $(".view-code").css("display", "none");
    
    //JQUERY FUNCTION 2
    $("#proj-pic").hover(function() {
        //JQUERY FUNCTION 3
		$(this).fadeIn();
        //JQUERY FUNCTION 4
        $(".view-code").show();
	}, function() {
        //JQUERY FUNCTION 5
        $(this). fadeOut();
        //JQUERY FUNCTION 6
        $(this).hide();
    });
    
})