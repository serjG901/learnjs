// task 1
console.log("task 1-----");
const fruits = ["aplle", "pear", "orange"];
const copyFruits = fruits;
copyFruits.push("banana");
console.assert(fruits.length === 4); //change the fruits via link

// task 2
console.log("task 2-----");
const styles = ["jazz", "blues"];
styles.push("rock&roll");
styles[Math.floor(styles.length / 2)] = "classic";
console.log(styles.shift());
styles.unshift("rap", "reggae");
console.log(styles);

// task 3
console.log("task 3-----");
let arr = ["a", "b"];
arr.push(function () {
    console.log(this);
});
arr[2](); //a,b,function

// task 4
console.log("task 4-----");

const sumInput = () => {
    let arr = [];
    while (true) {
        let input = prompt("Input a number for sum", "");
        if (input === "" || input === null || !isFinite(input)) break;
        arr.push(+input);
    }
    let sum = 0;
    for (let val of arr) {
        sum += val;
    }
    return sum;
};
console.log(sumInput());

// task 5
console.log("task 5-----");

const getMaxSubSum = (arr) => {
    let maxSum = 0;
    let partialSum = 0;

    for (let val of arr) {
        partialSum += val;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
};

let array = [-2, -3, 5, 3, -2, 8, -5, 6, -3, -8, 6, -9];
console.log(getMaxSubSum(array));
