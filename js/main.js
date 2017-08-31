$(document).ready(function () {

    $(".fullf").click(function () {
        $(".easy-mode").hide();
        $(".full-mode").show();
        $(this).addClass("active");
        $(".easy").removeClass("active");
    });

    $(".easy").click(function () {
        $(".easy-mode").show();
        $(".full-mode").hide();
        $(this).addClass("active");
        $(".fullf").removeClass("active");
    });


    $(".switch-full").bind("click", function (event) {
        $(".easy-mode").hide();
        $(".full-mode").show();
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1100);
    });

    $(".switch-easy").bind("click", function (event) {
        $(".easy-mode").show();
        $(".full-mode").hide();
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1100);
    });


});
