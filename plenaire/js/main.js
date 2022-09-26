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

    // $('#header').on('click',function () {
    //     $('#menu-pop').addClass('on');
    // });
    //
    // $('#menu-pop .close').on('click',function () {
    //     $('#menu-pop').removeClass('on');
    // });

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
    
    $('#scene01 .bgwrap').slidesjs({
        width:1717,
        height:980,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "slide", // 효과, slide/fade
            auto: true, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "slide"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: false,
            effect: "slide"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
    });


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



        // scroll event

        if (a >= 490) {
            $('#scene02 .product .rosejelly').addClass('on');
            $('#scene02 .product .skinfrostin').addClass('on');
            $('#scene02 .product .triper').addClass('on');
        } else {
            // $("").removeClass("on");

        }

        if (a >= 1400) {
            $('#scene02 .product .droplet').addClass('on');
            $('#scene02 .product .violetpaste').addClass('on');
        } else {
            // $("").removeClass("on");

        }

        if (a >= 1200) {
            $("#scene02 .image_moving").addClass("on");
        } else {
            // $("").removeClass("on");
        }

        if (a >= 3700) {
            $("#scene03 .text02").addClass("on");
            $("#scene03 .text03").addClass("on");
        } else {
        }

        if (a >= 4300) {
            $("#scene03 .image_moving_white").addClass("on");
        } else {
        }

        if (a >= 4900) {
            $("#scene04 .box1").addClass("on");
        } else {
        }

        if (a >= 5500) {
            $("#scene04 .box2").addClass("on");
        } else {
        }
        //
        // if (a >= 2000) {
        //     $('#scene03 .brandstory_image').stop().animate({'margin-top': (1100) -a * 0.33}, 500, 'easeOutBack');
        // } else {
        //     $("").removeClass("on");
        // }

        if (a >= 7000) {
            $("#scene05 .text_10").addClass("on");
            $("#scene05 .account").addClass("on");
        } else {
        }


        // scroll event end

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