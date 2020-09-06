let todos = [];

for (let i = 0; i < 10; i++) {
    let todo = {
        id: i,
        title: `titleTodos${i}`,
        text: `textTodos${i}`,
        complete: false
    };
    todos = addTodo(todos, todo);
};

//проверки --------------------------------------------

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

todos.forEach((todoItem) => {
    switch (todoItem.id) {
        case 2: console.assert(todoItem.complete === false);
            break;
        case 3: console.assert(todoItem.complete === true);
            break;
        case 6: console.log('todo with id 5 have been delete');
            break;
        case 8: console.assert(((todoItem.title === "newTitle for id=8") && (todoItem.complete === true)));;
            break;
        case 10: console.log('todo with id 10 have been add handly');
            break;
    };
    console.log(JSON.stringify(todoItem, null, 4));
});

todos = removeCompleted(todos);

console.log("todos without completed todo id = 3, 8");

todos.forEach((todoItem) => {
    console.log(JSON.stringify(todoItem, null, 4));
});

let todoForEdit = {
    id: 1,
    title: "EDITED title and complete whith assign for todo",
    text: "some text for todo in NEW TODOS ARRAY",
    complete: true
};

let editedArray = editedTodo(todos, todoForEdit);
console.log("new array editedTodo whith assign");
console.log(JSON.stringify(editedArray[1], null, 4));
console.log(JSON.stringify(editedArray[0], null, 4));
console.log("todos");
console.log(JSON.stringify(todos[1], null, 4));
console.log(JSON.stringify(todos[0], null, 4));

//------------------functions---------------------------

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
    let indexTodo = todoArray.findIndex((todo) => todo.id === todoId);
    if (indexTodo === -1) {
        throw new Error("Id not found!");
    };
    return indexTodo;
};

function editedTodo(todoArray, ...todoEdited) {
    let todo = { ...todoEdited }[0];
    if (todo) {
        let newTodoArray = todoArray.map(todoItem => {
            return todoItem = todoItem.id === todo.id ? { ...todoItem, ...todo } : todoItem;
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