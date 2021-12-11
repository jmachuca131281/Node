const asyncCallback = function(cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) { // "0.5" indica que el 50% va a fallar
      return cb(null, "hello world");
    } else {
      cb(new Error("hello error"));
    }
  }, 2000);
};

asyncCallback((err, msg) => { // Se envia la función.
  if (err) {
    console.log("error", err);
  } else {
    console.log("message", msg);
  }
});