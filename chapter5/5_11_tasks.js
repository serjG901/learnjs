//task 1
console.log("task 1--------");

const theDate = new Date(2012, 1, 20, 3, 12);
console.log(theDate);

//task 2
console.log("task 2--------");

const dateForDayOfWeek = new Date(2020, 8, 21);

const getWeekDay = (date) => {
    const arrayDayOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return arrayDayOfWeek[date.getDay()];
};

console.log(getWeekDay(dateForDayOfWeek));

//task 3
console.log("task 3--------");

const dateDayOfWeekEng = new Date(2020, 8, 20);

const getWeekDayEng = (date) => {
    let numberDay = date.getDay();
    return numberDay === 0 ? 7 : numberDay;
};

console.log(getWeekDayEng(dateDayOfWeekEng));

//task 4
console.log("task 4--------");
const dateForNow = new Date(2020, 8, 21, 15, 30);

const getDateAgo = (date, daysAgo) => {
    return new Date(date.getTime() - 24 * 60 * 60 * 1000 * daysAgo).getDate();
};
console.log(getDateAgo(dateForNow, 365));
console.log(dateForNow);

//task 5
console.log("task 5--------");
const getLastDayOFMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};

console.log(getLastDayOFMonth(2020, 1));

//task 6
console.log("task 6--------");
const getSecondsToday = () => {
    return (new Date() - new Date().setHours(0, 0, 0)) / 1000;
};
console.log(getSecondsToday());

//task 7
console.log("task 7--------");
const getSecondsToTomorrow = () => {
    return (new Date().setHours(24, 0, 0) - new Date()) / 1000;
};
console.log(getSecondsToTomorrow());

//task 8
console.log("task 8--------");

const formatDate = (date) => {
    let diff = (Date.now() - date) / 1000;

    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : `${month}`;

    let day = date.getDate();
    day = day < 10 ? `0${day}` : `${day}`;

    let hours = date.getHours();
    hours = hours < 10 ? `0${hours}` : `${hours}`;

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    let year = date.getFullYear().toString();
    year = `${year[2]}${year[3]}`;

    let fullDate = `${day}.${month}.${year} ${hours}:${minutes}`;

    return diff < 0
        ? "this time is future"
        : diff < 1
        ? "right now"
        : diff < 60
        ? `${diff} seconds ago`
        : diff < 3600
        ? `${Math.floor(diff / 60)} minuts ago`
        : diff < 3600 * 24
        ? fullDate
        : fullDate;
};
let date = new Date(new Date().setHours(24));
console.log(formatDate(date));
