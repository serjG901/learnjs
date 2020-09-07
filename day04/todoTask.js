let todos = [];

for (let i = 0; i < 10; i++) {
    let title = `titleTodos${i}`;
    let text = `textTodos${i}`;
    let todo = makeTodo(i, title, text, false);
    todos = addTodo(todos, todo);
};

//проверки --------------------------------------------

let todoHand = makeTodo(10, `HANDtitle10 make`, `HANDtext10`, false);

todos = addTodo(todos, todoHand);
todos = removeTodo(todos, 5);
todos = changeTodoTitle(todos, 8, "newTitle for id=8");
todos = changeTodoComplete(todos, 2, true);
todos = changeTodoComplete(todos, 2, false);
todos = changeTodoComplete(todos, 3, true);
todos = changeTodoComplete(todos, 7, true);
todos = changeTodoComplete(todos, 8, true);
todos = changeTodoComplete(todos, 9, true);

todos.forEach((todoItem) => {
    switch (todoItem.id) {
        case 2: console.assert(todoItem.complete === false);
            break;
        case 3: console.assert(todoItem.complete === true);
            break;
        case 6: console.log('todo with id 5 have been delete');
            break;
        case 7: console.assert(todoItem.complete === true);
            break;
        case 8: console.assert(((todoItem.title === "newTitle for id=8") && (todoItem.complete === true)));;
            break;
        case 9: console.assert(todoItem.complete === true);
            break;
        case 10: console.log('todo with id 10 have been add handly');
            break;
    };
    console.log(JSON.stringify(todoItem, null, 4));
});

todos = removeCompleted(todos);

console.log("todos without completed todo id = 3, 7, 8, 9");

todos.forEach((todoItem) => {
    console.log(JSON.stringify(todoItem, null, 4));
});

const someTitle = "MAKE TODO EDITED title and complete for todo";
const someText = "some text for todo in NEW TODOS ARRAY";
const edited = true;

let todoForEdit = makeTodo(1, someTitle, someText, true);

let editedArray = editedTodo(todos, todoForEdit);
console.log("new array editedTodo whith assign");
console.log(JSON.stringify(editedArray[1], null, 4));
console.log(JSON.stringify(editedArray[0], null, 4));
console.log("todos");
console.log(JSON.stringify(todos[1], null, 4));
console.log(JSON.stringify(todos[0], null, 4));

//------------------functions---------------------------
function makeTodo(id, title, text, complete, ...args) {
    return {
        id,
        title,
        text,
        complete,
    };
};

function addTodo(todoArray, newTodo) {
    let newTodoArray = todoArray.concat(newTodo);
    return newTodoArray;
};

function removeCompleted(todoArray) {
    let newTodoArray = todoArray.filter(todoItem => todoItem.complete === false);
    return newTodoArray;
};

function removeTodo(todoArray, todoId) {
    let newTodoArray = todoArray.filter(todoItem => todoItem.id !== todoId);
    return newTodoArray;
};

function changeTodoTitle(todoArray, todoId, newTitle) {
    let newTodoArray = todoArray.map(todoItem => {
        return todoItem = todoItem.id === todoId ? { ...todoItem, title: newTitle } : todoItem;
    });
    return newTodoArray;
};

function changeTodoComplete(todoArray, todoId, isComplete) {
    let newTodoArray = todoArray.map(todoItem => {
        return todoItem = todoItem.id === todoId ? { ...todoItem, complete: isComplete } : todoItem;
    });
    return newTodoArray;
};

function getIndexTodo(todoArray, todoId) {
    let indexTodo = todoArray.findIndex((todoItem) => todoItem.id === todoId);
    if (indexTodo === -1) {
        throw new Error("Id not found!");
    };
    return indexTodo;
};

function editedTodo(todoArray, todoEdited) {
    if (todoEdited) {
        let newTodoArray = todoArray.map(todoItem => {
            return todoItem = todoItem.id === todoEdited.id ? { ...todoItem, ...todoEdited } : todoItem;
        });
        return newTodoArray;
    } else {
        throw new Error("Entering edited object not correct or null");
    };
};

/*
console.log("checked Object.assign()");
let nt = 'hello';
// let o = todos[0];
let ob = Object.assign({}, todos[0]);
let o = Object.assign(ob, { title: nt });
console.log(JSON.stringify(o, null, 4));
console.log(JSON.stringify(todos[0], null, 4));
*/

/*
function editedTodo2(todoArray, ...todoEdited) {
    let todo = Object.assign({}, ...todoEdited);
    if (todo) {
        let newTodoArray = todoArray.map(e => {
            e = {
                id: e.id,
                title: e.id === todo.id ? todo.title || e.title : e.title,
                text: e.id === todo.id ? todo.text || e.text : e.text,
                complete: e.id === todo.id ? todo.complete || e.complete : e.complete
            };
            return e;
        });
        return newTodoArray;
    } else {
        throw new Error("Entering edited object not correct or null");
    };

};*/