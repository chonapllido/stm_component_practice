
$(function(){
    $(".combi-normal-tab li a").on("click", function (e) {
        e.preventDefault();
        $(this).parents("li").siblings().removeClass("on");
        $(this).parents("li").addClass("on");
    });
    $(".normal-tab li a").on("click", function (e) {
        e.preventDefault();
        $(this).parents("li").siblings().removeClass("on");
        $(this).parents("li").addClass("on");
    });
    $(".small-combi-tab li a").on("click", function (e) {
        e.preventDefault();
        $(this).parents("li").siblings().removeClass("on");
        $(this).parents("li").addClass("on");
    });
    $(".small-tab li a").on("click", function (e) {
        e.preventDefault();
        $(this).parents("li").siblings().removeClass("on");
        $(this).parents("li").addClass("on");
    });
});