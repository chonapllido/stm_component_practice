
$(function(){
    $("ul.combi-normal-tab li a, ul.normal-tab li a, ul.combi-small-tab li a, ul.small-tab li a, ul.large-tab li a, ul.combi-large-tab li a ").on("click", function (e) {
        e.preventDefault();
        $(this).parents("li").siblings().removeClass("on");
        $(this).parents("li").addClass("on");
    });
});