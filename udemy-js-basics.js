// findIndex implementation
var arr = [5, 1, 7, 2, 3, 4];

function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    debugger;
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

findIndex(arr, function (el, index, arr) {
  return el % 2 === 0;
});

// countDown Function

function countDown(time) {
  let intervalId = setInterval(function () {
    console.log(time);
    time--;
    if (time === 0) {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}

// Promise: Handling Errors
var p1 = new Promise(function (res, rej) {
  let num = Math.random();
  if (num < 0.5) {
    res(num);
  } else {
    rej(num);
  }
});

p1.then(function (data) {
  console.log("Promise p1 resolved with data:", data);
}).catch(function (data) {
  console.log("Error: ", data);
});

// Wrap setTimeout with Promise
var promise = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let randomInt = Math.floor(Math.random() * 10);
    reslove(randomInt);
  }, 4000);
});

promise
  .then(function (data) {
    console.log("Ramdom int passed to resolve:", data);
  })
  .catch(function (data) {
    console.log("Error: ", data);
  });
