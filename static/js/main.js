/**
 * 滚动固定导航栏
 */
document.addEventListener('scroll', function () {
    var scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollDistance >= 200) {    // 触发的位置
        //document.getElementsByClassName('header-div')[0].style.cssText = 'position:fixed;z-index:999;top:0;';
        document.getElementsByClassName('header-div')[0].classList.add('header-fixed');
        document.getElementsByClassName('header-div')[0].classList.add('fadeInDown');
    } else {
        document.getElementsByClassName('header-div')[0].classList.remove('header-fixed');
        document.getElementsByClassName('header-div')[0].classList.remove('fadeInDown');
    }
});
