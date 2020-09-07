// ------------------------global varibals--------------------
let globalID = 0;

//-------------------------functions---------------------------
const getId = () => globalID++;

const makeTodo = (title, text, complete) => {
    return {
        id: getId(),
        title,
        text,
        complete,
    };
};

const makeTodos = (n) => {
    let todos = [];
    for (let i = 0; i < n; i++) {
        let title = `title${i}`;
        let text = `text${i}`;
        let complete = false;
        let todo = makeTodo(title, text, complete);
        todos = addTodo(todos, todo);
    };
    return todos;
};

const addTodo = (todoArray, newTodo) => todoArray.concat(newTodo);

const removeCompleted = (todoArray) => todoArray.filter(todoItem => !todoItem.complete);

const removeTodo = (todoArray, todoId) => todoArray.filter(todoItem => todoItem.id !== todoId);

const changeTodoTitle = (todoArray, todoId, title) => {
    return todoArray.map(todoItem => (todoItem.id === todoId) ? { ...todoItem, title } : todoItem);
};

const changeTodoComplete = (todoArray, todoId, complete) => {
    return todoArray.map(todoItem => (todoItem.id === todoId) ? { ...todoItem, complete } : todoItem);
};

const editedTodo = (todoArray, todoEdited) => {
    if (todoEdited) {
        return todoArray.map(todoItem => (todoItem.id === todoEdited.id) ? { ...todoItem, ...todoEdited } : todoItem);
    } else {
        throw new Error("Entering edited object not correct or null");
    };
};

const getIndexTodo = (todoArray, todoId) => todoArray.findIndex((todoItem) => todoItem.id === todoId);

//----------------------------проверки--------------------------------------------
let todos = makeTodos(5);
let todoHand = makeTodo(`HANDtitle10 make`, `HANDtext10`, false);

todos = addTodo(todos, todoHand);
todos = removeTodo(todos, 3);
todos = removeTodo(todos, 4);
todos = changeTodoTitle(todos, 5, "newTitle for id=5");
todos = changeTodoComplete(todos, 2, true);
todos = changeTodoComplete(todos, 4, true);
todos = changeTodoComplete(todos, 5, true);

todos.forEach(todoItem => console.log(JSON.stringify(todoItem, null, 4)));

//проверяем удаление
todos = removeCompleted(todos);
console.log("todos without completed todo");
todos.forEach(todoItem => console.log(JSON.stringify(todoItem, null, 4)));

//проверяем редактирование
const title = "MAKE TODO EDITED title and complete for todo";
const text = "some text for todo in NEW TODOS ARRAY";
let todoForEdit = { id: 1, title, text, complete: true };

let editedArray = editedTodo(todos, todoForEdit);
console.log("new array editedTodo whith assign");
console.log(JSON.stringify(editedArray[1], null, 4));
console.log("todos");
console.log(JSON.stringify(todos[1], null, 4));