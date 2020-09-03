let todoArray = [];

for (i = 0; i < 10; i++) {
    let todo = {
        todoId: i,
        title: `titleTodo${i}`,
        text: `textTodo${i}`,
        complete: false
    };
    addTodo(todo);
};

let todoToAdd = {
    todoId: 10,
    title: `HANDtitle10`,
    text: `HANDtext10`,
    complete: false
};

addTodo(todoToAdd);
removeTodo(4);
changeTodoTitle(2, 'NEWtitleForId2');
changeTodoStatus(1, true);

for (i = 0; i < todoArray.length; i++) {
    switch (i) {
        case 1: alert('todo with id 1 complete TRUE');
            break;
        case 4: alert('todo with id 4 have been delete');
            break;
        case 9: alert('todo with id 10 have been add handly');
            break;
    };
    alert(JSON.stringify(todoArray[i]));
};

function addTodo(newTodo) {
    todoArray.push(newTodo);
};

function removeTodo(todoId) {
    todoArray.splice(todoId, 1);
};

function changeTodoTitle(todoId, newTitle) {
    todoArray[todoId].title = newTitle;
};

function changeTodoStatus(todoId, isComplete) {
    todoArray[todoId].complete = isComplete;
};