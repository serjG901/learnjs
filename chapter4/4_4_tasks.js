"use strict";
// task 1
let user = {
    name: "John",
    go() {
        console.log(this.name);
    },
}; // need ;

user.go();

// task 2
console.log("task 2");
let obj;
let method;

obj = {
    go() {
        console.log(this);
    },
};

obj.go(); //[object] ok this is obj
obj.go(); //[object] ok this is obj
(method = obj.go)(); // undefined not ok this to lost
(obj.go || obj.stop)(); // undefined not ok this to lost

// task 3
console.log("task 3");
function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}

let userM = makeUser();

//console.log(userM.ref.name); error

function makeUser2() {
    return {
        name: "John",
        ref() {
            return this;
        },
    };
}

let userMR = makeUser2();

console.log(userMR.ref().name); //John

// task 4
console.log("task 4");
let calculator = {
    leterA: null,
    leterB: null,
    read() {
        this.leterA = +prompt("first number", "");
        this.leterB = +prompt("second number", "");
    },
    sum() {
        return this.leterA + this.leterB;
    },
    mul() {
        return this.leterA * this.leterB;
    },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// task 5
console.log("task 5");
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    },
};

ladder.up().up().up().up().down().showStep().up().showStep();
