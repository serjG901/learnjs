//определяем пустой массив для добавления в него объекты todo
const todoArray = [];

//сделаем массив из 10-ти объектов todo
for (let i = 0; i < 10; i++) {
    let todo = {
        id: i,
        title: `titleTodo${i}`,
        text: `textTodo${i}`,
        complete: false
    };
    addTodo(todo);
};

let todoToAdd = {
    id: 10,
    title: `HANDtitle10`,
    text: `HANDtext10`,
    complete: false
};

addTodo(todoToAdd);
removeTodo(7);
changeTodoTitle(2, 'NEWtitleForId2');
changeTodoStatus(1, true);

todoArray.forEach((todo) => {
    switch (todo.id) {
        case 1: console.log('todo with id 1 complete TRUE');
            break;
        case 2: console.log('todo with id 2 have been change title');
            break;
        case 8: console.log('todo with id 7 have been delete');
            break;
        case 10: console.log('todo with id 10 have been add handly');
            break;
    };
    let indexTodo = getIndexTodo(todo.id);
    console.log(indexTodo);
    console.log(JSON.stringify(todoArray[indexTodo], null, 4));
});

function getIndexTodo(todoId) {
    let indexTodo = todoArray.findIndex((todo) => todo.id === todoId)
    if (indexTodo === -1) {
        throw new Error("Id not found!");
    };
    return indexTodo;
}

function addTodo(newTodo) {
    todoArray.push(newTodo);
    //return todoArray;
};

function removeTodo(todoId) {
    let indexTodo = getIndexTodo(todoId);
    todoArray.splice(indexTodo, 1);
    //return todoArray;
};

function changeTodoTitle(todoId, newTitle) {
    let indexTodo = getIndexTodo(todoId);
    todoArray[indexTodo].title = newTitle;
    //return todoArray;
};

function changeTodoStatus(todoId, isComplete) {
    let indexTodo = getIndexTodo(todoId);
    todoArray[indexTodo].complete = isComplete;
    //return todoArray;
};