// A promise can be:

// fulfilled - The action relating to the promise succeeded
// rejected - The action relating to the promise failed
// pending - Hasn't fulfilled or rejected yet
// settled - Has fulfilled or rejected

// The promise constructor takes one argument, a callback with two parameters, resolve and reject. Do something within the callback, perhaps async, then call resolve if everything worked, otherwise call reject.
var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
  
    if (/* everything turned out fine */) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });


//   then() takes two arguments, a callback for a success case, and another for the failure case. Both are optional, so you can add a callback for the success or failure case only.
promise.then(function(result) {
    console.log(result); // "Stuff worked!"
}, function(err) {
    console.log(err); // Error: "It broke"
});