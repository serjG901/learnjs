// task 1
console.log("task 1");
let sum = () => {
    let sum = 0;
    let add;
    do {
        add = +prompt(
            "Enter the number for sum, if ESC or 0 you are see the summ",
            ""
        );
        sum += add;
    } while (add);
    return sum;
};
console.log(sum());

// task 2
console.log("task 2");
console.log((1.35).toFixed(1));
console.log((6.35).toFixed(1));
console.log((6.35 * 10).toFixed(0) / 10);

// task 3 see task 1
console.log("task 3 see task 1");

// task 4
console.log("task 4");
let random = (min, max) => {
    return min + Math.random() * (max - min);
};
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(3, 6));
console.log(random(3, 6));
console.log(random(3, 6));

//task 5
console.log("task 5");

let randomInt = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};

console.log(randomInt(4, 6));
console.log(randomInt(4, 6));
console.log(randomInt(4, 6));
console.log(randomInt(4, 6));
console.log(randomInt(4, 6));
console.log(randomInt(4, 6));
console.log(randomInt(4, 6));
