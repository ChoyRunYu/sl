var currWindowHeight = document.documentElement.clientHeight;//获取当前窗口高度
/**
 * 获取元素
 */
var newsItem = document.getElementsByClassName('news-item');//获取新闻item对象
var moreBtn = document.getElementsByClassName('btn-block');//获取更多按钮对象
var videoTitle = document.getElementsByClassName('video-title');//获取视频标题对象
var aboutUsTitle = document.getElementsByClassName('main-aboutus-title');//获取关于我们标题对象
var hr = document.getElementsByTagName('hr');//获取hr分割线对象
var videoItem = document.getElementsByClassName('video-item');//获取视频item对象
var aboutUsLeft = document.getElementsByClassName('aboutus-left');//获取关于我们版块图片对象
var aboutUsRightText = document.getElementsByClassName('aboutus-right-text');//获取关于我们文字对象

/**
 * 设置动画函数
 * @param  e       元素对象
 * @param  st      滚动高度的值，scrollTop缩写
 * @param  animate 动画名称
 * @param  time    延迟时间
 */
function scrollAnimate(e, st, animate, time) {
    var eHeight = e.offsetHeight;//获取元素的高度
    var eHeightToBottom = currWindowHeight - (e.offsetTop - st);//计算得出元素距离底部的高度
    if (eHeightToBottom >= eHeight && !e.classList.contains('isVisible') - 20) {//判断元素是否全部出现以及是否已经播放过动画
        e.classList.add('isVisible');//为元素设置播放过动画的标志
        e.classList.add(animate);//为元素设置动画
        setTimeout(function () {
            e.style.visibility = 'visible';
        }, time)
        //显示元素
    }
}
/**
 *  封装获取滚动条高度的函数
 */
function getScrollTop() {
    var scroll_top = 0;
    if (document.documentElement && document.documentElement.scrollTop) {//判断是否支持document.documentElement方式获取
        scroll_top = document.documentElement.scrollTop;
    } else if (document.body) {//判断能够通过document.body获取
        scroll_top = document.body.scrollTop;
    }
    return scroll_top;
}

/**
 * 重写classList API
 */
domClass = function () {

    // IE6-10 不支持  
    // Safari5/Chrome8/Firefox3.6/Opera11.5 及以上版本支持  
    var supportClassList = function () {
        var div = document.createElement('div');
        div.className = 'a';
        return !!div.classList;
    }();

    var hasClass, addClass, removeClass, toggleClass, replaceClass;

    function check(el, cls) {
        if (el.nodeType !== 1 || typeof cls !== 'string') {
            return false;
        }
        return true;
    }

    if (supportClassList) {
        hasClass = function (el, cls) {
            if (check(el, cls))
                return el.classList.contains(cls);
            else
                return false;
        };
        addClass = function (el, cls) {
            var i = 0, c;
            if (check(el, cls)) {
                cls = cls.split(' ');
                while (c = cls[i++]) {
                    el.classList.add(c);
                }
            }
        };
        removeClass = function (el, cls) {
            var i = 0, c;
            if (check(el, cls)) {
                cls = cls.split(' ');
                while (c = cls[i++]) {
                    el.classList.remove(c);
                }
            }
        };
        toggleClass = function (el, cls) {
            if (check(el, cls)) {
                el.classList.toggle(cls);
            }
        };
    }
    else {
        hasClass = function (el, cls) {
            if (check(el, cls))
                return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') != -1;
            else
                return false
        };
        addClass = function (el, cls) {
            if (check(el, cls) && !hasClass(el, cls)) {
                el.className += (el.className ? " " : "") + cls;;
            }
        };

        removeClass = function (el, cls) {
            if (check(el, cls)) {
                el.className = el.className.replace(RegExp("\\b" + cls + "\\b", "g"), "");
            }
        };
        toggleClass = function (el, cls) {
            hasClass(el, cls) ? removeClass(el, cls) : addClass(el, cls);
        };
    }

    replaceClass = function (el, oldCls, newCls) {
        removeClass(el, oldCls);
        addClass(el, newCls);
    };

    return {
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass,
        replace: replaceClass
    };

}();

/**
 * 滚动条监听函数
*/
function windowOnScrollShow() {
    window.onscroll = function () {
        var st = getScrollTop();//获取滚动条高度
        scrollAnimate(newsItem[0], st, 'fadeInLeft01', 0);
        scrollAnimate(newsItem[1], st, 'fadeInLeft02', 0);
        scrollAnimate(newsItem[2], st, 'fadeInLeft03', 0);
        scrollAnimate(newsItem[3], st, 'fadeInRight03', 0);
        scrollAnimate(newsItem[4], st, 'fadeInRight02', 0);
        scrollAnimate(newsItem[5], st, 'fadeInRight01', 0);
        scrollAnimate(moreBtn[0], st, 'zoomIn', 0);
        scrollAnimate(moreBtn[1], st, 'zoomIn', 0);
        scrollAnimate(moreBtn[2], st, 'zoomIn', 0);
        scrollAnimate(videoTitle[0], st, 'bounceInLeft', 0);
        scrollAnimate(aboutUsTitle[0], st, 'bounceInLeft', 0);
        scrollAnimate(hr[1], st, 'lineInLeft', 0);
        scrollAnimate(hr[2], st, 'lineInLeft', 0);
        scrollAnimate(videoItem[0], st, 'fadeInUp', 0);
        scrollAnimate(videoItem[1], st, 'fadeInUpDelay1', 200);
        scrollAnimate(videoItem[2], st, 'fadeInUpDelay2', 400);
        scrollAnimate(videoItem[3], st, 'fadeInUpDelay3', 600);
        scrollAnimate(aboutUsLeft[0], st, 'fadeInLeft', 0);
        scrollAnimate(aboutUsRightText[0], st, 'fadeInRight', 0);
    }
}

/**
 * 如果是移动端，直接展示页面
 */
function pageShow(){
    //直接将元素的visibility属性设置为visible
    for(var i=0; i<newsItem.length;i++){
        newsItem[i].style.visibility='visible';
    }
    for(var v=0;v<moreBtn.length;v++){
        moreBtn[v].style.visibility='visible';
    }
    for(var y=0;y<videoItem.length;y++){
        videoItem[y].style.visibility='visible';
    }
    hr[1].style.visibility='visible';
    hr[2].style.visibility='visible';
    videoTitle[0].style.visibility='visible';
    aboutUsTitle[0].style.visibility='visible';
    aboutUsLeft[0].style.visibility='visible';
    aboutUsRightText[0].style.visibility='visible';
}

/**
 * 判断客户端是否为移动端
 * @returns flag
 */
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

/**
 * 主要调用函数
 */
function main() {
    if (IsPC()) {//如果是pc端，调用滚动动画
        windowOnScrollShow();
    } else {//如果不是则直接展示页面
        pageShow();
    }
}
main();




