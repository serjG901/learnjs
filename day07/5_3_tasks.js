// task 1
console.log("task 1 ----");
const ucFirst = (str) => {
    if (str) return (str = str[0].toUpperCase() + str.slice(1, str.length));
    return str;
};
console.log(ucFirst("vasya"));

// task 2
console.log("task 2 ----");
const checkSpam = (str) => {
    if (str) {
        const v = "viagra";
        const x = "xxx";
        str = str.toLowerCase();
        return str.indexOf(v) !== -1 || str.indexOf(x) !== -1;
    }
    return str;
};
console.log(checkSpam("asdasd VIAgrAa sdfsdf asdasd"));
console.log(checkSpam("asdasd sdfsdf asdasd xxXXxx wdfsf"));
console.log(checkSpam("asdasd viagxxsda sdfsdf asdasd"));

// task 3
console.log("task 3 ----");
const truncate = (str, maxlength) => {
    if (str.length > maxlength && maxlength > 0) {
        const dots = "\u2026";
        return str.slice(0, maxlength - 1) + dots;
    }
    return str;
};
console.log(truncate("asdas asd asd asd", 5));
console.log(truncate("asdas asd asd asd", 17));
console.log(truncate("asdas asd asd asd", 20));
console.log(truncate("asd", 1));
console.log(truncate("asd", 0));

// task 4
console.log("task 4 ----");
const extractCurancyValue = (str) => {
    return str ? +str.slice(1, str.length) : 0;
}
console.log(extractCurancyValue("$2342"));
console.log(extractCurancyValue("@13"));
console.log(extractCurancyValue("P13000000000"));
console.log(extractCurancyValue(""));
