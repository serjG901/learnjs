describe("makeTodos(n) - циклом создает массив объектов в количестве n", function() {

    describe("проверим количество созданных элементов при n = 100", function() {
  
        it(`n = 100 - длинна массива 100 элементов`, function() {
          assert.equal(makeTodos(100).length, 100);
        });
       
    });

    describe("проверим количество созданных элементов при n = 756", function() {
  
        it(`n = 756 - длинна массива 756 элементов`, function() {
          assert.equal(makeTodos(756).length, 756);
        });
       
    });

    describe("проверим количество созданных элементов при n = 0", function() {
  
        it(`n = 0 - длинна массива 0 элементов`, function() {
          assert.equal(makeTodos(0).length, 0);
        });
       
    });
  
    // ... другие тесты. Можно писать и describe, и it блоки.
});

describe("makeTodo(n) - циклом создает массив объектов в количестве n", function() {

    describe("проверим количество созданных элементов при n = 100", function() {
  
        it(`n = 100 - длинна массива 100 элементов`, function() {
          assert.equal(makeTodos(100).length, 100);
        });
       
    });

    describe("проверим количество созданных элементов при n = 756", function() {
  
        it(`n = 756 - длинна массива 756 элементов`, function() {
          assert.equal(makeTodos(756).length, 756);
        });
       
    });

    describe("проверим количество созданных элементов при n = 0", function() {
  
        it(`n = 0 - длинна массива 0 элементов`, function() {
          assert.equal(makeTodos(0).length, 0);
        });
       
    });
  
    // ... другие тесты. Можно писать и describe, и it блоки.
});