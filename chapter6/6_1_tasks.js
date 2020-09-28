//task 1
console.log("task 1 --------");

const sumToWhile = (n) => {
    if (n > 0) {
        let sum = 0;
        while (n > 0) {
            sum += n;
            n -= 1;
        }
        return sum;
    } else {
        return "Enter the natural number";
    }
};

console.log(sumToWhile(10));

const sumTo = (n) => {
    if (n > 0) {
        if (n === 1) return n;
        return n + sumTo(n - 1);
    } else {
        return "Enter the natural number";
    }
};

console.log(sumTo(7));

const sumToFormula = (n) => {
    if (n > 0) {
        return ((1 + n) * n) / 2;
    } else {
        return "Enter the natural number";
    }
};

console.log(sumToFormula(20));

//task 2
console.log("task 2 --------");

const factorial = (n) => {
    if (n > 0) {
        if (n === 1) return n;
        return n * factorial(n - 1);
    } else {
        return "Enter the natural number";
    }
};

console.log(factorial(8));