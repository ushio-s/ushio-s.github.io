(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
  var scrollTop = function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  /* const toggleAll = function (ele) {
    let titles = ele.querySelectorAll('.list__title')
    titles.forEach(title => title.classList.add('closed'))
  }*/

  /* const toggleList = function (ele) {
    ele.classList.toggle('closed')
  } */


  window.onload = function () {
    // let categoryPage = document.getElementById('category')
    var backTopBtn = document.getElementById('backTop'); // 文章页面，回到顶部按钮点击事件

    backTopBtn && backTopBtn.addEventListener('click', function (e) {
      console.log(e);
      e.preventDefault();
      scrollTop();
    }); // 专题页面初始化关闭专题

    /* if (categoryPage) {
      // 监听专题标题点击事件
      categoryPage.addEventListener('click', e => {
        let list = e.target
        if (list.classList.contains('list__title')) toggleList(list)
      })
    } */
  };
})(window);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aGVtZXMvbXVqaS9zb3VyY2Uvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQVc7QUFDVixNQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVksR0FBWTtBQUM1QixJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCO0FBQUUsTUFBQSxHQUFHLEVBQUUsQ0FBUDtBQUFVLE1BQUEsUUFBUSxFQUFFO0FBQXBCLEtBQWhCO0FBQ0QsR0FGRDtBQUlBOzs7OztBQUlBOzs7OztBQUlBLEVBQUEsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsWUFBWTtBQUMxQjtBQUNBLFFBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFNBQXhCLENBQWpCLENBRjBCLENBSTFCOztBQUNBLElBQUEsVUFBVSxJQUFJLFVBQVUsQ0FBQyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFBLENBQUMsRUFBSTtBQUN0RCxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBWjtBQUNBLE1BQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxNQUFBLFNBQVM7QUFDVixLQUphLENBQWQsQ0FMMEIsQ0FXMUI7O0FBQ0E7Ozs7Ozs7QUFPRCxHQW5CRDtBQXFCRCxDQWxDRCxFQWtDRyxNQWxDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpIHtcclxuICBjb25zdCBzY3JvbGxUb3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxyXG4gIH1cclxuXHJcbiAgLyogY29uc3QgdG9nZ2xlQWxsID0gZnVuY3Rpb24gKGVsZSkge1xyXG4gICAgbGV0IHRpdGxlcyA9IGVsZS5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdF9fdGl0bGUnKVxyXG4gICAgdGl0bGVzLmZvckVhY2godGl0bGUgPT4gdGl0bGUuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJykpXHJcbiAgfSovXHJcbiAgLyogY29uc3QgdG9nZ2xlTGlzdCA9IGZ1bmN0aW9uIChlbGUpIHtcclxuICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZWQnKVxyXG4gIH0gKi9cclxuXHJcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGxldCBjYXRlZ29yeVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKVxyXG4gICAgbGV0IGJhY2tUb3BCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja1RvcCcpXHJcblxyXG4gICAgLy8g5paH56ug6aG16Z2i77yM5Zue5Yiw6aG26YOo5oyJ6ZKu54K55Ye75LqL5Lu2XHJcbiAgICBiYWNrVG9wQnRuICYmIGJhY2tUb3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHNjcm9sbFRvcCgpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOS4k+mimOmhtemdouWIneWni+WMluWFs+mXreS4k+mimFxyXG4gICAgLyogaWYgKGNhdGVnb3J5UGFnZSkge1xyXG4gICAgICAvLyDnm5HlkKzkuJPpopjmoIfpopjngrnlh7vkuovku7ZcclxuICAgICAgY2F0ZWdvcnlQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBlLnRhcmdldFxyXG4gICAgICAgIGlmIChsaXN0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdF9fdGl0bGUnKSkgdG9nZ2xlTGlzdChsaXN0KVxyXG4gICAgICB9KVxyXG4gICAgfSAqL1xyXG4gIH1cclxuXHJcbn0pKHdpbmRvdylcclxuIl19
