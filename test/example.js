const CPromise = require('../lib/cpromise');

const promise = new CPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

promise.then(
  (res) => {
    console.log('onFulfilled1', res);
    return new Promise((resolve, reject) => reject(false))
  },
  (err) => {
    console.log('onRejected1', err);
  },
).then(
  (res) => {
    console.log('onFulfilled2', res);
  },
  (err) => {
    console.log('onRejected2', err);
  },
);