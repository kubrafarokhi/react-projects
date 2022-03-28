// Promise cannot be cancelled, it is the process that returns promise must be cancellable.

// For example, XmlHttpRequest is cancellable as it has an abort method.

// Fetch api also supports AbortController.signal, that is cancellable.

//https://medium.com/@masnun/creating-cancellable-promises-33bf4b9da39c
//https://medium.com/@bramus/cancel-a-javascript-promise-with-abortcontroller-3540cbbda0a9

let controller = new AbortController();

let task = new Promise((resolve, reject) => {
  // some logic ...
  controller.signal.addEventListener('abort', () => {
    reject('oops'));
  }
});

controller.abort(); // task is now in rejected state


//-------------------------------------------------------------------

let controller = new AbortController();
fetch(url, {
  signal: controller.signal
});


const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()