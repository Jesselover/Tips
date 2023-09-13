const EventEmitter = require("events");
class CustomEvent extends EventEmitter {}
const ce = new CustomEvent();
const fn1 = () => {
  console.log("this is a test !");
};
const fn2 = () => {
  console.log("this is a fn2 !");
};
ce.on("test", fn1);
ce.on("test", fn2);

// !只会执行一次
ce.once("one", (time) => {
  console.log("now:" + time);
});

setInterval(() => {
  ce.emit("test", 1, 100);
  ce.emit("one", new Date());
}, 1000);

setInterval(() => {
  // ce.removeListener("test", fn1);
  ce.removeAllListeners("test");
}, 5000);
