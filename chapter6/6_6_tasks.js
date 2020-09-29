//task 1 
console.log("task 1 -------------");
const makeCounter = () => {
    let count = 0;
    let counter = function () {
      return count++;
    };
    counter.set = (value) => (count = value);
    counter.decrease = () => (count -= 1);
    return counter;
  };
  
  const counter = makeCounter();
  const counter2 = makeCounter();
  
  console.log(counter());
  console.log(counter.set(10));
  console.log(counter());
  console.log(counter.decrease());
  console.log(counter());
  console.log(counter2());

//task 2 
console.log("task 2 -------------");

function sum(a) {

  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}


console.log(`${sum(3)(4)(7)(8)}`);