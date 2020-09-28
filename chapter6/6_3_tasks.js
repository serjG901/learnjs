"use strict";
// task 1
console.log("task 1-----------");

const makeCounter = () => {
    let count = 0;

    return function () {
        return count++;
    };
};

let counter = makeCounter();
let counter2 = makeCounter();

console.assert(counter() === 0);
console.assert(counter() === 1);

console.assert(counter2() === 0);
console.assert(counter2() === 1);

// task 2
console.log("task 2-----------");

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counterConstructor = new Counter();

console.assert(counterConstructor.up() === 1);
console.assert(counterConstructor.up() === 2);
console.assert(counterConstructor.down() === 1);

// task 3
console.log("task 3-----------");
let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}!`);
    }
}

//sayHi();  if not "use strict" mode => show "Hello, John!"

// task 4
console.log("task 4-----------");

const sum = (a) => {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};

console.log(sum(4)(5)(1));

// task 5
console.log("task 5-----------");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const inBetween = (a, b) => {
    return (item) => item >= a && item <= b;
};

const inArray = (array) => {
    return (item) => array.includes(item);
};

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

// task 6
console.log("task 6-----------");

let users = [
    { name: "John", age: 20, surname: "Aohnson" },
    { name: "Pete", age: 18, surname: "Ieterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
];

const byField = (fildName) => {
    return (item1, item2) => (item1[fildName] > item2[fildName] ? 1 : -1);
};

console.log(users.sort(byField("name"))[0]);
console.log(users.sort(byField("age"))[0]);
console.log(users.sort(byField("surname"))[0]);

// task 7
console.log("task 7-----------");

const makeArmy = () => {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = () => console.log(i);
        shooters.push(shooter);
    }
    return shooters;
};

let army = makeArmy();

army[1]();
army[9]();
army[5]();
