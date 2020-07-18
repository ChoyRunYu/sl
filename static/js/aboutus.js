var aboutusNav = document.getElementById('aboutus-nav');//获取页面左侧导航栏对象
var aboutusNavOffsetTop = aboutusNav.offsetTop;//获取页面左侧导航栏到顶部的距离
var aboutusNavToWindowHeight = 0;//左侧导航栏到窗口顶部的距离
var aLink = document.getElementsByTagName('a');//获取a标签
/**
 * 将带有锚点的a标签对象赋值给数组
 */
var aLinkName = new Array();
var aLinkHref = new Array();
/**
 * 获取含有name属性的a标签对象
 */
for (var i = 0; i < aLink.length; i++) {
    if (aLink[i].hasAttribute('name')) {
        aLinkName.push(aLink[i]);
    }
}
/**
 * 获取href含有锚点链接的a标签对象
 */
for (var i = 0; i < aLink.length; i++) {
    for (var j = 0; j < aLinkName.length; j++) {
        if (aLink[i].getAttribute('href') == '#' + aLinkName[j].name) {
            aLinkHref.push(aLink[i]);
        }
    }
}

/**
 * 点击锚链接平滑滚动函数
 */
function smoothScrollAnchors() {
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                        scrollTop: target.offset().top-80
                }, 1000);
                return false;
            }
        }
    });
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
 * 固定左侧导航栏函数
 */
function fixedNav() {
    aboutusNavToWindowHeight = aboutusNavOffsetTop - getScrollTop();
    console.log('aboutusNavOffsetTop =' + aboutusNavOffsetTop);
    console.log('getScrollTop = ' + getScrollTop());
    console.log('aboutusNavToWindowHeight = ' + aboutusNavToWindowHeight);
    if (aboutusNavToWindowHeight <= 150 && !aboutusNav.classList.contains('nav-fixed')) {
        aboutusNav.classList.add('nav-fixed');
    } else if (aboutusNavToWindowHeight > 150 && aboutusNav.classList.contains('nav-fixed')) {
        aboutusNav.classList.remove('nav-fixed');
    }
}
/**
 * 滚动添加左侧导航栏样式
 */
function scrollAddActive() {
    for (var i = 0; i < aLinkName.length; i++) {
        var height = aLinkName[i].offsetTop - getScrollTop();
        if (height < 100 && !aLinkHref[i].classList.contains('scroll-active')) {
            aLinkHref[i].classList.add('scroll-active');
            aLinkHref[i].style.color = 'white';
            for (var j = 0; j < aLinkHref.length; j++) {
                if (i != j) {
                    aLinkHref[j].classList.remove('scroll-active');
                    aLinkHref[j].style.color = "";
                }
            }
        } else if (height > 100 && aLinkHref[i].classList.contains('scroll-active')) {
            aLinkHref[i].classList.remove('scroll-active');
            aLinkHref[i].style.color = '';
        }
    }


}

smoothScrollAnchors();
/**
 * 滚动监听
 */
window.onscroll = function () {
    fixedNav();
    scrollAddActive();
}

/**
 * 重写classList API
 */
domClass = function() {  
      
    // IE6-10 不支持  
    // Safari5/Chrome8/Firefox3.6/Opera11.5 及以上版本支持  
    var supportClassList = function() {  
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
      
    if(supportClassList) {  
        hasClass = function(el, cls) {  
            if( check(el, cls) )  
                return el.classList.contains(cls);  
            else  
                return false;  
        };  
        addClass = function(el, cls) {  
            var i = 0, c;  
            if( check(el, cls) ) {  
                cls = cls.split(' ');  
                while( c = cls[i++] ) {  
                    el.classList.add(c);  
                }  
            }  
        };  
        removeClass = function(el, cls) {  
            var i = 0, c;  
            if( check(el, cls) ) {  
                cls = cls.split(' ');  
                while( c = cls[i++] ) {  
                    el.classList.remove(c);  
                }  
            }  
        };  
        toggleClass = function(el, cls) {  
            if( check(el, cls) ) {  
                el.classList.toggle(cls);  
            }  
        };  
    }  
    else {  
        hasClass = function(el, cls) {  
            if( check(el, cls) )  
                return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') != -1;  
            else  
                return false  
        };  
        addClass = function(el, cls) {  
            if( check(el, cls) && !hasClass(el, cls) ) {  
                el.className += (el.className ? " " : "") + cls;;  
            }  
        };  
          
        removeClass = function(el, cls) {  
            if( check(el, cls) ) {  
                el.className = el.className.replace(RegExp("\\b" + cls + "\\b", "g"), "");  
            }  
        };  
        toggleClass = function(el, cls) {  
            hasClass(el, cls) ? removeClass(el, cls) : addClass(el, cls);  
        };  
    }  
  
    replaceClass = function(el, oldCls, newCls) {  
        removeClass(el, oldCls);  
        addClass(el, newCls);  
    };  
      
    return {  
        has : hasClass,  
        add : addClass,  
        remove : removeClass,  
        toggle : toggleClass,  
        replace : replaceClass  
    };  
      
}(); 




