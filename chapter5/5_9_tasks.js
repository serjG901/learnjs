//task 1
console.log("task 1-------");

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

const sumSalaries = (obj) => {
    let sum = 0;
    for (let salaries of Object.values(obj)) {
        sum += salaries;
    }
    return sum;
};

console.log(sumSalaries(salaries));

//task 2
console.log("task 2-------");

let user = {
    name: "John",
    age: 30,
};

const count = (obj) => {
    return Object.keys(obj).length;
};

console.log(count(user));
