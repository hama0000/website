$(function () {

    $('.box')
        .on('mouseover', function () {
            $(this).children('a').children('.front').stop(true).animate({
                top: '-12rem'
            },
                500
            );
            $(this).children('a').children('.back').stop(true).animate({
                top: '-12rem'
            },
                500
            );
        })
        .on('mouseout', function () {
            $(this).children('a').children('.front').stop(true).animate({
                top: '0'
            },
                500
            );
            $(this).children('a').children('.back').stop(true).animate({
                top: '0'
            },
                500
            );
        });


    const boxCenterX = () => {
        var boxWidth = $('.box-line').width() - 672;
        $('.box-line').css('padding-left', boxWidth / 2 + 'px');
    }

    const boxCenterY = () => {
        var windowHeight = $(window).height();
        var boxHeight = $('.box-wrapper').height();
        $('.box-wrapper').css('margin-top', (windowHeight - boxHeight) / 2 + 'px');
    }

    $(document).ready(function () {
        boxCenterX();
        boxCenterY();
    });

    $(window).resize(function () {
        boxCenterX();
    });
});