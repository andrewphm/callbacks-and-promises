// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("--- Oops ---");
    reject('>>> Failure! <<<')
    reject('>>> Somethings! <<<')
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

/*
// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
  When a promise is rejected, the catch block is executed and the reject argument is passed to the catch block.


// **2)** What happens when you call both `resolve` and `reject`? Test this.
 It depends on which one is called first. If resolve is called first, the promise is resolved and the then block is executed.
 If reject is called first, the promise is rejected and the catch block is executed.

// **3)** Does the order matter you call resolve and reject matter? Test this.
  Yes, the order matters. If resolve is called first, the promise is resolved and the then block is executed.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
  If resolve or reject is called more than once, the promise is resolved or rejected only once. The second call is ignored.

*/
