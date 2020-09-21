// task 1
console.log("task 1 ---------");

const unique = (arr) => {
    return [...new Set(arr)];
};
let array = [
    "not",
    "repeat",
    "not",
    "not",
    "repeat",
    "items",
    "repeat",
    "items",
    "items",
];
console.log(unique(array));

// task 2
console.log("task 2 ---------");

let anaArray = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const acleanMap = (anagramArray) => {
    let mapArr = new Map();
    anagramArray.forEach((str) => {
        let strSort = [...str.toLowerCase()].sort().join("");
        mapArr.set(strSort, str);
    });
    return [...mapArr.values()];
};

const acleanSet = (anagramArray) => {
    let cleanArr = [];
    let setArr = new Set();
    anagramArray.forEach((str) => {
        let strSort = [...str.toLowerCase()].sort().join("");
        setArr.has(strSort) || cleanArr.push(str);
        setArr.add(strSort);
    });
    return cleanArr;
};

console.log(acleanMap(anaArray));
console.log(acleanSet(anaArray));

// task 3
console.log("task 3 ---------");

let map = new Map();
map.set("name", "John");
let keys = [...map.keys()];
keys.push("more");

console.log(keys);