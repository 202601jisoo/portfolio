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

    $('#scene01 .header .menu').on('click',function () {
        $(this).toggleClass('active');

        if ($('.menu-pop').hasClass('on')) {
            $('.menu-pop').removeClass('on');
        } else {
            $('.menu-pop').addClass('on');
        }
    });

    $('.menu-pop .menu-left .menu-btn-box .btn01').on('mouseenter',function () {
        $('.menu-pop .menu-right .menu-box > div').fadeOut();
        $('.menu-pop .menu-right .menu-box .box2').fadeIn();
        $('.menu-pop .menu-right .menu-bg > div').fadeOut();
        $('.menu-pop .menu-right .menu-bg .bg2').fadeIn();
    });

    $('.menu-pop .menu-left .menu-btn-box .btn02').on('mouseenter',function () {
        $('.menu-pop .menu-right .menu-box > div').fadeOut();
        $('.menu-pop .menu-right .menu-box .box3').fadeIn();
        $('.menu-pop .menu-right .menu-bg > div').fadeOut();
        $('.menu-pop .menu-right .menu-bg .bg3').fadeIn();
    });

    $('.menu-pop .menu-left .menu-btn-box .btn03').on('mouseenter',function () {
        $('.menu-pop .menu-right .menu-box > div').fadeOut();
        $('.menu-pop .menu-right .menu-box .box4').fadeIn();
        $('.menu-pop .menu-right .menu-bg > div').fadeOut();
        $('.menu-pop .menu-right .menu-bg .bg4').fadeIn();
    });

    //
    // $('#scene01 .header').on('click',function () {
    //     $('#menu-pop').addClass('on');
    // });
    //
    // $('#menu-pop .close').on('click',function () {
    //     $('#menu-pop').removeClass('on');
    // });


});

$(function () {

    $(".naviJs > li > a, .topBtn, #footer .scroll").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);
        if (a >= 1) {
            // $("").addClass("on");

        } else {
            // $("").removeClass("on");

        }

        if (a >= 730) {
            $('#scene02 .text02').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        if (a >= 1800) {
            $('#scene03 .text03').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        if (a >= 3500) {
            $('#scene04 .text05').addClass('on');
            $('#scene04 .btn_shop').addClass('on');
        } else {
            // $("").removeClass("on");

        }

        if (a >= 4600) {
            $('#scene05 .text07').addClass('on');
            $('#scene05 .text08').addClass('on');
        } else {
            // $("").removeClass("on");

        }

        if (a >= 5400) {
            $('#scene06 .text09').addClass('on');

        } else {
            // $("").removeClass("on");

        }

        // if (a >= 2000) {
        //     $('#scene04 .img05').stop().animate({'margin-top': (900) -a * 0.33}, 100, 'easeOutBack');
        // } else {
        //     $("").removeClass("on");
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


    $('.menu-btn-box > li').mouseenter(function(){
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('.png','_on.png'))
    });

    $('.menu-btn-box > li').mouseleave(function(){
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('_on.png','.png'))
    });
});