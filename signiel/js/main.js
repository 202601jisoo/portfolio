$(document).ready(function () {


    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    $('#header').on('click',function () {
        $('#menu-pop').addClass('on');
    });

    $('#menu-pop .close').on('click',function () {
        $('#menu-pop').removeClass('on');
    });


});

$(function () {

    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });

    $('#scene01 .title01').addClass('on');
    $('#scene01 .title02').addClass('on');
    $('#scene01 .title03').addClass('on');

    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);
        if (a >= 1) {
            // $("").addClass("on");

        } else {
            // $("").removeClass("on");

        }



        if (a >= 930) {
            $('#scene01 .text').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        if (a >= 2300) {
            $('#scene02 .preview').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        if (a >= 4200) {
            $('#scene03 .designassets').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        if (a >= 5600) {
            $('#scene04 .mockup02').addClass('on');
            $('#scene04 .iconbox .icon05').addClass('on');
            $('#scene04 .iconbox .icon04').addClass('on');
            $('#scene04 .iconbox .icon03').addClass('on');
            $('#scene04 .iconbox .icon02').addClass('on');
            $('#scene04 .iconbox .icon01').addClass('on');
        } else {
            // $("").removeClass("on");

        }

        if (a >= 6900) {
            $('#scene05 .quickmenu').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        if (a >= 8100) {
            $('#scene06 .smartroom').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        if (a >= 9600) {
            $('#scene06 .easybooking').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        if (a >= 11100) {
            $('#scene07 .overview').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        // if (a >= 1) {
        //     $('#scene01 .logo .logo_s').addClass('on');
        //     $('#scene01 .logo .logo_i').addClass('on');
        //     $('#scene01 .logo .logo_g').addClass('on');
        //     $('#scene01 .logo .logo_n').addClass('on');
        //     $('#scene01 .logo .logo_i2').addClass('on');
        //     $('#scene01 .logo .logo_e').addClass('on');
        //     $('#scene01 .logo .logo_l').addClass('on');
        //
        // } else {
        //     // $("").removeClass("on");
        // }



        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })

    $('#scene01 .logo').addClass('on');
});