//task 1
console.log("task 1-------");

let user = {
    name: "John",
    years: 30,
};

let { name, years, isAdmin = false } = user;

console.log(name);
console.log(years);
console.log(isAdmin);

//task 2
console.log("task 2-------");

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

const topSalary = (salaries) => {
    let topEmployee = null;
    let topSalary = 0;
    for (let [key, value] of Object.entries(salaries)) {
        topSalary > value || ((topSalary = value), (topEmployee = key));
    }
    return topEmployee;
};

console.log(topSalary(salaries));
console.log(topSalary({}));
