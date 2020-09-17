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
