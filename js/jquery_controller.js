
$(function(){
	// calendar
	try{
		fnCalendar('input.calendar');
	} catch (e){}
	
    $("ul.combi-normal-tab li a, ul.normal-tab li a, ul.combi-small-tab li a, ul.small-tab li a, ul.large-tab li a, ul.combi-large-tab li a ").on("click", function (e) {
        e.preventDefault();
        $(this).parents("li").siblings().removeClass("on");
        $(this).parents("li").addClass("on");
    });

    $(".button-tabs li a").on("click", function (e) {
        e.preventDefault();
        $(this).parents("li").siblings().removeClass("on");
        $(this).parents("li").addClass("on");
    });

    //faq-section 
    $(".fs1").on("click", function(e){
        e.preventDefault();
        $(".p1").toggleClass("active");
        $(this).attr("border", "#d9d9d9");
    });

    $(".fs2").on("click", function(e){
        e.preventDefault();
        $(".p2").toggleClass("active");
    });

    $(".fs3").on("click", function(e){
        e.preventDefault();
        $(".p3").toggleClass("active");
    });
});