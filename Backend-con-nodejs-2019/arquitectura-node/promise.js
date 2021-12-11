const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello world");
    } else {
      reject(new Error("hello error"));
    }
  }, 2000);
});

promise
  .then(msg1 => msg1.toUpperCase())
  .then(msg1 => console.log("message", msg1))
  .catch(err => console.log("error", err));