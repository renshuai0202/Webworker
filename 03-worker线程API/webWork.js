self.importScripts('add.js');

self.onmessage = e => {
  const result = add(e.data.a, e.data.b);
  self.postMessage({ result });
}