$(function() {
    $(window).resize();
    // 导航栏滚动效果
    $('#arrow').click(function() {
        $.scrollTo('#self', 800);
    });
    $(".a-self").click(function() {
        $.scrollTo('#self', 500);
    });
    $(".a-skill").click(function() {
        $.scrollTo('#workskill', 800);
    });
    $(".a-experience").click(function() {
        $.scrollTo('#workexperience', 1000);
    });
    $(".a-project").click(function() {
        $.scrollTo('#project', 1200);
    });
    $(".a-plan").click(function() {
        $.scrollTo('#workplan', 1500);
    });
    $(".a-email").click(function() {
        $.scrollTo('#selfemail', 1800);
    });
    //为首页文字添加动画效果
    $('#sayhello').addClass('rotateIn');
    //添加省略号


});

$(window).resize(function() {
    // 首页满屏效果
    $(".header").css('height', $(window).height());
    //首页文字效果
    $("#sayhello").css('top', ($(window).height() - $("#sayhello").outerHeight()) / 2);

});

$(window).resize(function() {
    // 尾页满屏效果
    $('.footer').css('height', $(window).height());
});
// 实现非顶部导航栏随页面滚动而固定在顶部
$(window).scroll(function() {
    if ($(document).scrollTop() > $('.header').height()) {
        $('.nav').addClass('fixednav');
    } else {
        $('.nav').removeClass('fixednav');
    }
});
