
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
});