//task 1
console.log("task 1------");

const ucFirst = (str) => {
    if (str) return str[0].toUpperCase() + str.slice(1, str.length);
    return str;
};

const camelize = (str) => {
    return str
        .split("-")
        .map((word, index) => (index ? ucFirst(word) : word))
        .join("");
};
console.log(camelize("list-style-image"));
console.log(camelize("background-color"));

// task 2
console.log("task 2-------");

const filterRange = (arr, a, b) => {
    return arr.filter((item) => a <= item && item <= b);
};
const arr = [2, 1, 2, 0, 3, 5, 1, 7, 2, 5];
console.log(filterRange(arr, 2, 5));

// task 3
console.log("task 3--------");

const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i -= 1;
        }
    }
};

let arr2 = [1, 4, 5, 1, 2, 3, 4, 5];
filterRangeInPlace(arr2, 2, 4);
console.log(arr2);

// task 4
console.log("task 4--------");

let arr3 = [1, 2, 3, -4, 5, 6, -7, 8, 9];
console.log(arr3.sort((a, b) => b - a));

// task 5
console.log("task 5--------");

const copySorted = (arr) => {
    const newArr = [...arr];
    return newArr.sort();
};
const arrString = ["user", "Alex", "name"];
const newArrString = copySorted(arrString);
console.log(arrString);
console.log(newArrString);

// task 6
console.log("task 6--------");

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = (str) => {
        let arr = str.split(" ");
        if (isFinite(arr[0]) && isFinite(arr[2]))
            return this.methods[arr[1]](+arr[0], +arr[2]);

        return "not a number";
    };

    this.addMethod = (method, func) => {
        this.methods[method] = func;
    };
}

let calc = new Calculator();
console.log(calc.calculate("23 + 227"));
console.log(calc.calculate("23 - 227"));

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate("13 * 13"));
console.log(calc.calculate("45 / 9"));
console.log(calc.calculate("11 ** 3"));

// task 7
console.log("task 7--------");

let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 32 };
let masha = { name: "Masha", age: 26 };

let users = [vasya, petya, masha];

let names = users.map((user) => user.name);

console.log(names);

// task 8
console.log("task 8--------");

let vasya2 = { name: "Vasya", surname: "Ivanov", id: 1 };
let petya2 = { name: "Petya", surname: "Petrov", id: 2 };
let masha2 = { name: "Masha", surname: "Kolesnikova", id: 3 };

let users2 = [vasya2, petya2, masha2];

let usersMaped = users2.map((user) => {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  };
});
console.log(usersMaped);

// task 9
console.log("task 9--------");

let vasya3 = { name: "Vasya", age: 25 };
let petya3 = { name: "Petya", age: 32 };
let masha3 = { name: "Masha", age: 26 };

let users3 = [vasya3, petya3, masha3];

let sortByAge = (users) => {
  users.sort((a, b) => a.age - b.age);
};
sortByAge(users3);
console.log(users3);

// task 10
console.log("task 10--------");
let arrForShuffle = [1,2,3];

const shuffleArray = (arr) => {
    arr.sort(() => Math.random()-0.5);
};
shuffleArray(arrForShuffle);
console.log(arrForShuffle);

// task 11
console.log("task 11--------");
let vasya4 = { name: "Vasya", age: 25 };
let petya4 = { name: "Petya", age: 32 };
let masha4 = { name: "Masha", age: 24 };

let users4 = [vasya4, petya4, masha4];

let sortMediumAge = (users) => {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
};
console.log(sortMediumAge(users4));

// task 12
console.log("task 12--------");

let arrRepeat = [
    "not",
    "not",
    "repeat",
    "item",
    "item",
    "not",
    "repeat",
    "item",
    "if",
    "repeat",
  ];
  
  let unique = (arr) => {
    let uniqArr = [];
    arr.forEach((element) => {
      uniqArr.includes(element) || uniqArr.push(element);
    });
    return uniqArr;
  };
  
  console.log(unique(arrRepeat));