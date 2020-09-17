// task 1
let obj = {};
function A() { return obj}
function B() { return obj}

let a = new A;
let b = new B;

console.log(a==b);

// task 2
console.log("task 2");
function Calculator() {
    this.leterA = null;
    this.leterB = null;
    this.read = () => {
        this.leterA = +prompt("first number", "");
        this.leterB = +prompt("second number", "");
    };
    this.sum = () => {
        return this.leterA + this.leterB;
    };
    this.mul = () => {
        return this.leterA * this.leterB;
    };
}

let calculator = new Calculator;

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// task 3
console.log("task 3");
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = () => {
        this.value += +prompt("add number","");
    };
}

let accum = new Accumulator(5);

accum.read();
accum.read();

console.log(accum.value);