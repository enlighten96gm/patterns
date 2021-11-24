// Пораждающий патерн проектирования , который позовляет 
// Создавать семейства связанных объектов, не привязываясь к конкретным классам создаваемых объектов

// Необходимо выделить общие интерфейсы для отдельныз продуктов 
// К примеру есть разные стили кресел, но у них будет общий Интерфейс КРЕСЛО 
// Все диваны получают интерфейс диваны и так далее 

// Далее мы создаем абстрактную фабрику общий интерфейс 
// createChair createTable createSofa
// Должны возвращать ранее созданные типы продуктов

// Далее для каждой вариации продуктов , мы должны создать их собсетнную фабрику 
// К примеру ФабрикаМодерн возвращает все ранее созданные интерфесы с типом Модерн и так далее

class WoodenDoor {
    getDescription() {
        console.log('I am a wooden door')
    }
}

class IronDoor {
    getDescription() {
        console.log('I am an iron door')
    }
}

class Welder {
    getDescription() {
        console.log('I can only fit iron doors')
    }
}

class Carpenter {
    getDescription() {
        console.log('I can only fit wooden doors')
    }
}

class WoodenDoorFactory {
    makeDoor(){
        return new WoodenDoor()
    }

    makeFittingExpert() {
        return new Carpenter()
    }
}

class IronDoorFactory {
    makeDoor(){
        return new IronDoor()
    }

    makeFittingExpert() {
        return new Welder()
    }
}

woodenFactory = new WoodenDoorFactory()

door = woodenFactory.makeDoor()
expert = woodenFactory.makeFittingExpert()

door.getDescription()  // I am a wooden door
expert.getDescription() // I can only fit wooden doors

// P.S. Мы просто создаем отдельные типы предметов
// И объединяем их по своей логике в абстрктные фабрики
// Дерево с челом занимающийся деревом
// Метал со сварщиком
// На выходе имеем 2 абстрактные фарики 
// 1-ая занимается деревом и несет в себе логику обраотки дерева и прочее
// 2-ая занимается металом и несет в себе логику обработки метала и т д