# Webworker
《PWA入门》

01-主线程webworker线程通信
  踩坑1: 
    本地访问index.html页面，报错，webWork.js跨域错误
    解决办法1:
      本地启动http-server服务
    解决办法2:
      使用内嵌script标签，注意type设置为浏览器无法识别的类型

02-主线程API
  const webWork = new Work('xxx');
  webWork.postMessage = function
  webWork.onmessage = function
  webWork.onerror = function