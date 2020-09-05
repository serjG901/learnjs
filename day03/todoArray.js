//определяем пустой массив для добавления в него объектов todo
const todoArray = [];

//сделаем массив из 10-ти объектов todo
for (let i = 0; i < 10; i++) {
    //объект todo со свойствами id, title, text, complete
    let todo = {
        id: i,
        title: `titleTodo${i}`,
        text: `textTodo${i}`,
        complete: false
    };

    //функция добавления в массив addTodo(newTodo) описана ниже
    addTodo(todo);
};

//определим вручную один объект todo для проверки функции addTodo
let todoToAdd = {
    id: 10,
    title: `HANDtitle10`,
    text: `HANDtext10`,
    complete: false
};

//изменим вручную массив todoArr при помощи наших функций описанных ниже
addTodo(todoToAdd);
removeTodo(7);
changeTodoTitle(4, 'NEWtitleForId2');
changeTodoStatus(1, true);

//выведем в консоль массив todoArr с изменениями
todoArray.forEach((todo) => {

    //выводим справочно ручные изменения для todo c id=1,4,7,10 что описаны выше
    switch (todo.id) {
        case 1: console.log('todo with id 1 complete TRUE');
            break;
        case 4: console.log('todo with id 4 have been change title');
            break;
        //case 8 потому что объект с id=7 удален, поэтому выводим перед todo.id=8
        case 8: console.log('todo with id 7 have been delete');
            break;
        case 10: console.log('todo with id 10 have been add handly');
            break;
    };

    //находим индекс объекта todo по его id
    let indexTodo = getIndexTodo(todo.id);

    //выводим индекс объекта в консоль
    console.log(indexTodo);

    //выводим объект с индексом indexTodo в консоль с форматированием (..., null, 4)
    console.log(JSON.stringify(todoArray[indexTodo], null, 4));
});

//нахождение в массиве todoArr индекса объекта todo по его id
function getIndexTodo(todoId) {
    let indexTodo = todoArray.findIndex((todo) => todo.id === todoId);

    //если объекта с таким id нет (indexTodo будет равен -1) выводим ошибку в консоль
    if (indexTodo === -1) {
        throw new Error("Id not found!");
    };

    //возвращаем значение indexTodo вызывающему коду
    return indexTodo;
};

//добавление объекта todo в массив todoArray
function addTodo(newTodo) {

    //метод .push() вставляет объект todo в конец массива todoArr
    todoArray.push(newTodo);
    //return todoArray;
};

//удаление объекта todo по его id из массива todoArray
function removeTodo(todoId) {

    //находим индекс объекта todo по его id
    let indexTodo = getIndexTodo(todoId);

    /*
    метод .splice(startIndex, deleteCount) удаляет объект 
    (если deleteCount равен 1) или несколько объектов
    (если deleteCount больше 1) из массива начиная со startIndex (включительно)
    */
    //в данном случае удаляем один объект с индексои indexTodo
    todoArray.splice(indexTodo, 1);
    //return todoArray;
};

//изменение свойства title объекта c заданным id в массиве todoArray
function changeTodoTitle(todoId, newTitle) {

    //находим индекс объекта todo по его id
    let indexTodo = getIndexTodo(todoId);

    //меняем значение свойства title объекта todo с индексом indexTodo
    todoArray[indexTodo].title = newTitle;
    //return todoArray;
};

//изменение свойства complete объекта todo заданного id в массиве todoArray
function changeTodoStatus(todoId, isComplete) {

    //находим индекс объекта todo по его id
    let indexTodo = getIndexTodo(todoId);

    //меняем значение свойства complete объекта todo с индексом indexTodo
    todoArray[indexTodo].complete = isComplete;
    //return todoArray;
};