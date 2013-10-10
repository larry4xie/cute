/**
 * ugly
 *
 * 使用：<!--[if lt IE 8]><script src="../../dist/cute-ie67.js"></script><![endif]-->
 *
 * 为保证低版本浏览器(主要是ie6/7)的一些主要功能也能正常使用的js工具<br/>
 *
 * 只有如下两种情况才会使用这种方法（这不是一个好方法）：
 * 1. 在低版本下显示非常难看，而且这个功能很重要
 * 2. 在非低版本下使用非常方便，而低版本很麻烦，兼容的车成本太大
 */
(function($) {
    // icon font
    // 兼容使用css :before的实现
    var icons = {
        'icon-pencil' : '&#xe000;',
        'icon-bullhorn' : '&#xe001;',
        'icon-camera' : '&#xe002;',
        'icon-image' : '&#xe003;',
        'icon-location' : '&#xe005;',
        'icon-clock' : '&#xe006;',
        'icon-phone' : '&#xe007;',
        'icon-mobile' : '&#xe008;',
        'icon-bubble' : '&#xe009;',
        'icon-user' : '&#xe00a;',
        'icon-users' : '&#xe00b;',
        'icon-cog' : '&#xe00c;',
        'icon-remove' : '&#xe00d;',
        'icon-eye' : '&#xe00e;',
        'icon-star' : '&#xe00f;',
        'icon-heart' : '&#xe010;',
        'icon-info' : '&#xe011;',
        'icon-cancel-circle' : '&#xe012;',
        'icon-checkmark-circle' : '&#xe013;',
        'icon-close' : '&#xe014;',
        'icon-checkmark' : '&#xe015;',
        'icon-minus' : '&#xe016;',
        'icon-blocked' : '&#xe018;',
        'icon-loop' : '&#xe019;',
        'icon-share' : '&#xe01a;',
        'icon-pinToTop' : '&#xe01b;',
        'icon-envelope' : '&#xe01d;',
        'icon-bars' : '&#xe01e;',
        'icon-search' : '&#xe01f;',
        'icon-user-2' : '&#xe020;',
        'icon-arrow-up' : '&#xe01c;',
        'icon-apple' : '&#xe021;',
        'icon-android' : '&#xe022;',
        'icon-windows8' : '&#xe023;',
        'icon-cart' : '&#xe004;',
        'icon-flag' : '&#xe024;',
        'icon-post' : '&#xe025;',
        'icon-plus' : '&#xe017;',
        'icon-cashBag' : '&#xe026;',
        'icon-mobile-2' : '&#xe028;',
        'icon-question' : '&#xe029;',
        'icon-arrowd' : '&#xe02a;',
        'icon-arrowl' : '&#xe02b;',
        'icon-arrowr' : '&#xe02c;',
        'icon-arrowt' : '&#xe02d;',
        'icon-downTriangle' : '&#xe02e;',
        'icon-fangwu' : '&#xe02f;',
        'icon-cheliang' : '&#xe030;',
        'icon-jiaoyou' : '&#xe031;',
        'icon-jianli' : '&#xe032;',
        'icon-chongwu' : '&#xe033;',
        'icon-jiaoyu' : '&#xe034;',
        'icon-fuwu' : '&#xe035;',
        'icon-jianzhi' : '&#xe036;',
        'icon-quanzhi' : '&#xe037;',
        'icon-ershou' : '&#xe038;',
        'icon-renew' : '&#xe027;',
        'icon-lightning' : '&#xe039;',
        'icon-pcCamera' : '&#xe03a;'
    };
    $(function() {
        $('.icon').each(function(i, el){
            var c = el.className.match(/icon-[^\s'"]+/);
            if (c && icons[c[0]]) {
                $(el).html(icons[c[0]]);
                // el.innerHTML = icons[c[0]];
            }
        });
    });

})(jQuery);