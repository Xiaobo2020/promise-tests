var promisesAplusTests = require("promises-aplus-tests");
var CPromise = require('../lib/cpromise');

var adapter = {
  deferred: function () {
    var resolve, reject;
    var promise = new CPromise(function (_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
    });
    return {
        promise: promise,
        resolve: resolve,
        reject: reject
    };  
}
};
promisesAplusTests(adapter, function (err) {
    // All done; output is in the console. Or check `err` for number of failures.
    console.error(err);
});