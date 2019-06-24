
$(function(){
	// calendar
	try{
		fnCalendar('input.calendar');
	} catch (e){}
	
    $("tab-combi li a, .general-tab li a").on("click", function (e) {
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

    $(".faq-section").on("click", function(e){
        e.preventDefault();
        $(this).find(".link-add").toggleClass("minimize");
        
        if($(window).width() < 768){
             $(this).find(".question").toggleClass("no-border");
        }
        
    });

    // Start Form Gallery Section
    $(".form-gallery .details .title").mouseenter(function(){
        $(this).parents('.gallery-section').addClass('on-hover');
    });
    $(".form-gallery .details .title").mouseleave(function(){
        $(".gallery-section").removeClass('on-hover');
    });

    $(".form-gallery .details .files a").click(function(e){
        e.preventDefault();
        $('.gallery-section').removeClass('on');
        $(this).parents('.gallery-section').addClass('on');
    });

    $(".form-gallery .details .save-options .top a").click(function(e){
        e.preventDefault();
        $(this).parents('.gallery-section').removeClass('on');
    });

    $(".form-gallery .details .save-options .bottom a, .details .title").click(function(e){
        e.preventDefault();
    });

    $(".form-gallery .gallery-list .details .title").dotdotdot();
    // End Form Gallery Section

    // Start VOD Section
    $(".vod.no-writer .vod-list .details .title").dotdotdot();

    $(".vod.no-writer .details .title").mouseenter(function(){
        $(this).parents('.vod-section').addClass('on-hover');
    });
    $(".vod.no-writer .details .title").mouseleave(function(){
        $(".vod-section").removeClass('on-hover');
    });
    
    $(".vod-content .details .title").dotdotdot();

    $(".vod-content .details .title").mouseenter(function(){
        $(this).parents('.content-wrapper').addClass('on-hover');
    });
    $(".vod-content .details .title").mouseleave(function(){
        $(".content-wrapper").removeClass('on-hover');
    });

    $(".vod-content .content a").click(function(e){
        e.preventDefault();
        $(this).siblings().toggleClass('on');
        $(this).toggleClass('on');
        console.log('x');
    });
    // End VOD Section

    $('.dot').dotdotdot();

});


