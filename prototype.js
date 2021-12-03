// Прототип — это порождающий паттерн проектирования, 
// который позволяет копировать объекты, не вдаваясь в подробности их реализации.

// В общем-то сложно что-то сказать об этом тут вроде все просто
// Но не будь у нас prototype у нас бы был только один метод у объекта CLONE 
// Который позволяет создавать копии родительского объекта

// После создания нового объекта очевидно, что мы не изменям стартовый интерфейс

var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
}
TeslaModelS.prototype.go = function() {
    console.log('go');
    //  Вращаются колеса
}()
TeslaModelS.prototype.stop = function() {
    console.log('stop');
    // Применяются тормозные колодки
}

const tesla = new TeslaModelS()