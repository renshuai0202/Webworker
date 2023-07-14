self.onmessage = function (e) {
  console.log('收到主线程的信息是', e.data);
  if (e.data.type === '天气') {
    self.postMessage("今天天气很好");
  }
}
