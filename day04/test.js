describe("makeTodos(n) - циклом создает массив объектов в количестве n", () => {
    describe("проверим количество созданных элементов при n = 100", () => {
        it(`n = 100 - длинна массива 100 элементов`, () =>
            assert.equal(makeTodos(100).length, 100));
    });

    describe("проверим количество созданных элементов при n = 756", () => {
        it(`n = 756 - длинна массива 756 элементов`, () =>
            assert.equal(makeTodos(756).length, 756));
    });

    describe("проверим количество созданных элементов при n = 0", () => {
        it(`n = 0 - длинна массива 0 элементов`, () =>
            assert.equal(makeTodos(0).length, 0));
    });
    // ... другие тесты. Можно писать и describe, и it блоки.
});

describe("addTodo = (todoArray, newTodo) добавляет объект в массив", () => {
    describe("проверим добавление объекта в пустой массив", () => {
        it(`addTodo( [], {} ).length == 1`, () =>
            assert.equal(addTodo([], {}).length, 1));
    });

    describe("проверим добавление множества объектов в пустой массив", () => {
        let newArray = (n) => {
            let arr = [];
            for (i = 0; i < n; i++) {
                arr = addTodo(arr, {});
            }
            return arr;
        };
        let n = 100;
        it(`newArray(${n}).length == ${n}`, () =>
            assert.equal(newArray(n).length, n));
    });
});

describe("removeTodo = (todoArray, todoId) удаляет объект из массива", () => {
    describe("проверим удаление объекта с id = 1 из массива [ { id: 1 } ]", () => {
        it(`removeTodo( [ { id: 1 } ], 1 ).lenght == 0`, () =>
            assert.equal(removeTodo([{ id: 1 }], 1).length, 0));
    });
});

describe("changeTodoTitle = (todoArray, todoId, title) изменяет значение title в объекте", () => {
    it(`проверим изменение значения свойства title`, () => {
        assert.equal(
            changeTodoTitle([{ id: 1, title: "oldTitle" }], 1, "newTitle")[0]
                .title,
            "newTitle"
        );
    });
});

describe("changeTodoComplete = (todoArray, todoId, complete) изменяет значение complete в объекте", () => {
    it(`проверим изменение свойства complete c false на true`, () => {
        assert.equal(
            changeTodoComplete([{ id: 1, complete: false }], 1, true)[0]
                .complete,
            true
        );
    });

    it(`проверим изменение свойства complete c true на false`, () => {
        assert.equal(
            changeTodoComplete([{ id: 1, complete: true }], 1, false)[0]
                .complete,
            false
        );
    });
});

describe("removeCompleted = (todoArray) возвращает массив с невыполненными todo (todo.complete = false)", () => {
    it(`в массиве 1 объект с comlete: true, проверим что останется 0 элементов после функции`, () => {
        assert.equal(removeCompleted([{ complete: true }]).length, 0);
    });
    it(`в массиве 1 объект с comlete: false, проверим что останется 1 элемент после функции`, () => {
        assert.equal(removeCompleted([{ complete:false }]).length, 1);
    });
});

describe("editedTodo = (todoArray, todoEdited) изменяет объект в массиве по его todoEdited.id", () => {
    it(`изменим значение двух свойств и проверим изменение значения 1-го свойства`, () => {
        assert.equal(
            editedTodo(
                [{ id: 1, property1: "oldValue1", property2: "oldValue2" }],
                { id: 1, property1: "newValue1", property2: "newValue2" }
            )[0].property1,
            "newValue1"
        );
    });

    it(`изменим значение двух свойств и проверим изменение значения 2-го свойства`, () => {
        assert.equal(
            editedTodo(
                [{ id: 1, property1: "oldValue1", property2: "oldValue2" }],
                { id: 1, property1: "newValue1", property2: "newValue2" }
            )[0].property2,
            "newValue2"
        );
    });

    it(`изменим значение одного свойства и проверим чтобы не изменилось значение второго свойства`, () => {
        assert.equal(
            editedTodo(
                [{ id: 1, property1: "oldValue1", property2: "oldValue2" }],
                { id: 1, property1: "newValue1" }
            )[0].property2,
            "oldValue2"
        );
    });
});
