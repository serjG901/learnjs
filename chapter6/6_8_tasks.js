//task 1
console.log("task 1 -------");

const printNumbersInterval = (from, to) => {
    let i = from;
    const intervalID = setInterval(() => {
        console.log(`printNumbersInterval: ${i++}`);
        if (i > to) clearInterval(intervalID);
    }, 1000);
};
printNumbersInterval(5, 10);

const printNumbersTimeout = (from, to) => {
    let i = from;
    setTimeout(function run() {
        console.log(`printNumbersTimeout: ${i}`);
        if (i < to) setTimeout(run, 1000);
        i++;
    }, 1000);
};
printNumbersTimeout(1, 4);

//task 2
console.log("task 2 -------");
let i = 0;

setTimeout(() => console.log(i), 100);

for (let j = 0; j < 100000000; j++) {
    i++;
}
