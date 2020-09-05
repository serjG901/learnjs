let todos = [];

for (let i = 0; i < 10; i++) {
    let todo = {
        id: i,
        title: `titleTodo${i}`,
        text: `textTodo${i}`,
        complete: false
    };
    todos = addTodo(todos, todo);
};

function addTodo(todoArray, newTodo) {
    let newTodoArray = todoArray.concat(newTodo);
    return newTodoArray;
};

function removeCompleted(todoArray) {
    let newTodoArray = todoArray.filter(e => e.complete === false);
    return newTodoArray;
};

function removeTodo(todoArray, todoId) {
    let newTodoArray = todoArray.filter(e => e.id !== todoId);
    return newTodoArray;
};

function changeTodoTitle(todoArray, todoId, newTitle) {
    let newTodoArray = todoArray.map(e => {
        /* e = {
             id: e.id,
             title: e.id === todoId ? newTitle : e.title,
             text: e.text,
             complete: e.complete
         };*/
        return e = e.id === todoId ? Object.assign(e, { title: newTitle }) : e;
    });
    return newTodoArray;
};

function changeTodoComplete(todoArray, todoId, isComplete) {
    let newTodoArray = todoArray.map(e => {
        /* e = {
             id: e.id,
             title: e.title,
             text: e.text,
             complete: e.id === todoId ? isComplete : e.complete
         };*/
        return e = e.id === todoId ? Object.assign(e, { complete: isComplete }) : e;
    });
    return newTodoArray;
};

function getIndexTodo(arr, todoId) {
    let indexTodo = arr.findIndex((todo) => todo.id === todoId);
    if (indexTodo === -1) {
        throw new Error("Id not found!");
    };
    return indexTodo;
};

let todoHand = {
    id: 10,
    title: `HANDtitle10`,
    text: `HANDtext10`,
    complete: false
};

todos = addTodo(todos, todoHand);
todos = removeTodo(todos, 5);
todos = changeTodoTitle(todos, 8, "newTitle for id=8");
todos = changeTodoComplete(todos, 3, true);
todos = changeTodoComplete(todos, 2, true);
todos = changeTodoComplete(todos, 8, true);
todos = changeTodoComplete(todos, 2, false);

todos.forEach((e) => {
    switch (e.id) {
        case 2: console.log('todo with id 2 have been change COMPLETE false - true - false');
            break;
        case 3: console.log('todo with id 3 have been change COMPLETE to true');
            break;
        case 6: console.log('todo with id 5 have been delete');
            break;
        case 8: console.log('todo with id 8 have been change TITLE and COMPLETE to true');
            break;
        case 10: console.log('todo with id 10 have been add handly');
            break;
    };
    console.log(JSON.stringify(e, null, 4));
});

todos = removeCompleted(todos);

console.log("todos without completed todo id = 3, 8");

todos.forEach((e) => {
    console.log(JSON.stringify(e, null, 4));
});

//проверил assign
let nt = 'hello';
let o = Object.assign(todos[0], { title: nt });
console.log(JSON.stringify(o, null, 4));

//------------------------------------------------
function editedTodo(todoArray, ...todoEdited) {
    let todo = { ...todoEdited };
    let newTodoArray = todoArray.map(e => {
        return e = e.id === todo[0].id ? Object.assign(e, ...todoEdited) : e;
    });
    return newTodoArray;
};

let todoForEdit = {
    id: 1,
    title: "EDITED!",
    text: "some text for edited todo",
    complete: true,
    edited: true
};

let editedArray = editedTodo(todos, todoForEdit);
console.log(JSON.stringify(editedArray[1], null, 4));
console.log("Почему todos в editedTodo изменяется map-ом?");
console.log(JSON.stringify(todos[1], null, 4));
//----------------------------------------------------