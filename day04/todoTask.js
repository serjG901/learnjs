//определяем пустой массив для добавления в него объектов
let todos = [];

//сделаем массив из 10-ти объектов
for (let i = 0; i < 10; i++) {
    //объект todo со свойствами id, title, text, complete
    let todo = {
        id: i,
        title: `titleTodo${i}`,
        text: `textTodo${i}`,
        complete: false
    };

    //функция добавления в массив addTodo(todos, todo) описана ниже
    todos = addTodo(todos, todo);
};

//добавление объекта в массив через concat
function addTodo(arr, newTodo) {
    let todoArray = arr.concat(newTodo);
    return todoArray;
};

//создание массива с неисполненными задачами
function removeCompleted(arr) {
    let todoArrayNoComplete = arr.filter(e => e.complete === false);
    return todoArrayNoComplete;
};

//удаление объекта todo по его id из массива todos
function removeTodo(arr, todoId) {
    let todoArrayRemove = arr.filter(e => e.id !== todoId);
    return todoArrayRemove;
};

//изменение свойства title объекта c заданным id в массиве todos
function changeTodoTitle(arr, todoId, newTitle) {
    let todoArrayNewTitle = arr.map(e => {
        e = {
            id: e.id,
            title: e.id === todoId ? newTitle : e.title,
            text: e.text,
            complete: e.complete
        };
        return e;
    });
    return todoArrayNewTitle;
};

//изменение свойства complete объекта c заданным id в массиве todos
function changeTodoComplete(arr, todoId, isComplete) {
    let todoArrayNewComplete = arr.map(e => {
        e = {
            id: e.id,
            title: e.title,
            text: e.text,
            complete: e.id === todoId ? isComplete : e.complete
        };
        return e;
    });

    return todoArrayNewComplete;
};

//нахождение в массиве индекса объекта по его id
function getIndexTodo(arr, todoId) {
    let indexTodo = arr.findIndex((todo) => todo.id === todoId);

    //если объекта с таким id нет (indexTodo будет равен -1) выводим ошибку в консоль
    if (indexTodo === -1) {
        throw new Error("Id not found!");
    };

    //возвращаем значение indexTodo вызывающему коду
    return indexTodo;
};

let todoNew = {
    id: 10,
    title: `HANDtitle10`,
    text: `HANDtext10`,
    complete: false
};

todos = addTodo(todos, todoNew);

todos = removeTodo(todos, 5);

todos = changeTodoTitle(todos, 8, "newTitle for id=8");

todos = changeTodoComplete(todos, 3, true);
todos = changeTodoComplete(todos, 2, true);
todos = changeTodoComplete(todos, 8, true);
todos = changeTodoComplete(todos, 2, false);

todos.forEach((e) => {

    //выводим справочно ручные изменения для todo c id=2,3,6,8,10 что описаны выше
    switch (e.id) {
        case 2: console.log('todo with id 2 have been change COMPLETE false - true - false');
            break;
        case 3: console.log('todo with id 3 have been change COMPLETE to true');
            break;
        //case 5 потому что объект с id=5 удален, поэтому выводим перед todo.id=6
        case 6: console.log('todo with id 5 have been delete');
            break;
        case 8: console.log('todo with id 8 have been change TITLE and COMPLETE to true');
            break;
        case 10: console.log('todo with id 10 have been add handly');
            break;
    };

    //находим индекс объекта todo по его id
    let indexTodo = getIndexTodo(todos, e.id);

    //выводим индекс объекта в консоль
    console.log(indexTodo);

    //выводим объект с индексом indexTodo в консоль с форматированием (..., null, 4)
    console.log(JSON.stringify(todos[indexTodo], null, 4));
});

todos = removeCompleted(todos);

console.log("todos without completed todo id = 3, 8");

todos.forEach((e) => {

    //находим индекс объекта todo по его id
    let indexTodo = getIndexTodo(todos, e.id);

    //выводим индекс объекта в консоль
    console.log(indexTodo);

    //выводим объект с индексом indexTodo в консоль с форматированием (..., null, 4)
    console.log(JSON.stringify(todos[indexTodo], null, 4));
});

