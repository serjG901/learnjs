//task 1
console.log("task 1---------");

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
];

let [obj1, obj2, obj3] = messages;

let weakForReadMessages = new WeakSet(messages);

const readMessages = (obj) => {
    weakForReadMessages.add(obj);
};

const isReadMessages = (obj) => {
    return weakForReadMessages.has(obj);
};

console.log(isReadMessages(obj2));

let obj4 = { text: "Not now!", from: "Alice" };
console.log(isReadMessages(obj4));
readMessages(obj4);
console.log(isReadMessages(obj4));

//task 2
console.log("task 2---------");

let messagesDate = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
];

let [obj11, obj22, obj33] = messagesDate;

let mapForReadMessages = new WeakMap();

messagesDate.forEach((message) => {
    mapForReadMessages.set(message, Date.now());
});

const readMessagesWithDate = (obj) => {
    mapForReadMessages.set(obj, Date.now());
};

const isReadMessagesWithDate = (obj) => {
    return mapForReadMessages.has(obj);
};

const dateReadMessagesWithDate = (obj) => {
    return new Date(mapForReadMessages.get(obj));
};

console.log(isReadMessagesWithDate(obj22));

let obj44 = { text: "Not now!", from: "Alice" };
console.log(isReadMessagesWithDate(obj44));
readMessagesWithDate(obj44);
console.log(isReadMessagesWithDate(obj44));
console.log(dateReadMessagesWithDate(obj44));
