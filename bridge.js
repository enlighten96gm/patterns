// Мост — это структурный паттерн проектирования, 
// который разделяет один или несколько классов на две отдельные иерархии —
// абстракцию и реализацию, позволяя изменять их независимо друг от друга.

// Предположим , что у нас есть фргуры и есть цвета
// Мы можем создать огромное количество интерфейсов с разными фигурами и цветами
//  То бишь Синий квадрат , красный Круг

// А можем воспользоваться МОСТОМ 
// То бишь мы создаем отдельный интерфейс какого-то цвета 
// А потом применяем на интерфейс фигур вышесозданный интерфейс

class Circle {
    constructor(theme) {
        this.theme = theme
    }
    getCOntent() {
        return `This Circle have ${this.theme.getColor()}`
    }
}

class Square {
    constructor(theme) {
        this.theme = theme
    }
    getCOntent() {
        return `This Square have ${this.theme.getColor()}`
    }
}

class Triangle {
    constructor(theme) {
        this.theme = theme
    }
    getCOntent() {
        return `This Triangle have ${this.theme.getColor()}`
    }
}

class Red {
    getColor() {
        return 'Red'
    }
}
class Blue {
    getColor() {
        return 'Blue'
    }
}
class Black {
    getColor() {
        return 'Black'
    }
}
const redColor = new Red()
const blueColor = new Blue()

const BlueSquare = new Square(blueColor)

