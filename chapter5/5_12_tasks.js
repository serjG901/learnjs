//task 1
console.log("task 1-------");

let user = {
    name: "Vasil Ivanovich",
    age: 35,
};
let userJSON = JSON.stringify(user);
console.log(userJSON);
console.log(JSON.parse(userJSON).name);

//task 2
console.log("task 2-------");

let room = {
    number: 23,
};

let meetup = {
    title: "Meeting",
    occupiedBy: [{ name: "Ivanov" }, { name: "Petrov" }],
    place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
    JSON.stringify(meetup, (key, value) => {
        return key !== "" && value === meetup ? undefined : value;
    })
);
