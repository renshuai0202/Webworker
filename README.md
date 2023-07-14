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

03-worker线程API
  属性：
    self是对当前作用域的引用，类似于主线程环境下的window
    name是worker的名字，创建实例化时在options设置的
  方法：
    importScripts
      importScripts(url?, url, ...);
      被引入的脚本，只需要定义函数即可，不用导出关键字
      倒入脚本后，属性或方法，自动挂载到全局作用域中
    postMessage()
  事件：
    onmessage = function
    onmemessageerror = function
