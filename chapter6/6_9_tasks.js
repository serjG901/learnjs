// task 1 -----

console.log("task 1 -------");

function work(...args) {
    console.log(args);
}

const spy = (func) => {
    function wraper(...args) {
        wraper.calls.push(args.toString());
        let result = func(...args);
        return result;
    }
    wraper.calls = [];
    return wraper;
};

work = spy(work);

work(1, 2, 3);
work(1, 3);
work("hello");

work.calls.forEach((item) => {
    console.log(`call: ${item}`);
});

// task 2 -----

console.log("task 2 -------");

const f = (...args) => {
    console.log(args.toString());
};

const delay = (func, ms) => {
    return function (...args) {
        setTimeout(() => func(args), ms);
    };
};

let f1000 = delay(f, 1000);
let f5000 = delay(f, 5000);

f1000("test 1s");
f5000("test 5s");

// task 3 -----

console.log("task 3 -------");

function fd(...args) {
    console.log(args.toString());
}

const debounce = (func, ms) => {
    function wraper(...args) {
        const nowTime = new Date(); // в учебнике сделано через состояние true false и смену его через setTimeout
        const diffTime = nowTime - wraper.callTime;
        if (diffTime < ms) return;
        wraper.callTime = nowTime;
        return func(args);
    }
    wraper.callTime = 0;
    return wraper;
};

fd = debounce(fd, 500);

fd(1); // выполняется немедленно
fd(2); // проигнорирован

setTimeout(() => fd(3), 100); // проигнорирован
setTimeout(() => fd(4), 500); // выполняется
setTimeout(() => fd(5), 900); // проигнорирован
setTimeout(() => fd(6), 1100); // выполняется

// task 5 -----

console.log("task 5 -------");

function getMouseCoordinate(e) {
    console.log(`mouse coordinate - ${e.clientX}:${e.clientY}`);
}

const throttle = (func, ms) => {
    let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
};

getMouseCoordinate = throttle(getMouseCoordinate, 2000);

window.addEventListener("mousemove", getMouseCoordinate);
