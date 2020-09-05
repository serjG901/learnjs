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

function addTodo(arr, newTodo) {
    let newTodos = arr.concat(newTodo);
    return newTodos;
};

function removeCompleted(arr) {
    let newTodos = arr.filter(e => e.complete === false);
    return newTodos;
};

function removeTodo(arr, todoId) {
    let newTodos = arr.filter(e => e.id !== todoId);
    return newTodos;
};

function changeTodoTitle(arr, todoId, newTitle) {
    let newTodos = arr.map(e => {
        e = {
            id: e.id,
            title: e.id === todoId ? newTitle : e.title,
            text: e.text,
            complete: e.complete
        };
        return e;
    });
    return newTodos;
};

function changeTodoComplete(arr, todoId, isComplete) {
    let newTodos = arr.map(e => {
        e = {
            id: e.id,
            title: e.title,
            text: e.text,
            complete: e.id === todoId ? isComplete : e.complete
        };
        return e;
    });
    return newTodos;
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

