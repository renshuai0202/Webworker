self.onmessage = e => {
  if (e.data.q) {
    throw new Error("出错了");
    self.postMessage({
      a: '今天天气晴朗'
    });
  }
}