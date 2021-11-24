// это порождающий паттерн проектирования, 
// который позволяет создавать сложные объекты пошагово. 
// Строитель даёт возможность использовать один и тот же код 
// строительства для получения разных представлений объектов.

// В общем мы рассмотри пример созданию БУРГЕРА
// Каждый отдельный покупатель хочет создать свой собственный бургер.
// Чтобы не создавать отдельный интерфейс для кждого отдельного бургера 
// Мы можем применить паттер Строитель тем самым облегчив себе жизнь нереально.

// Так бы выглядила наша программа без данного патерна
// Первый плохой пример
class BurgerWithPeperoniAndCheeze {
    constructor(size) {
        this.size = size
        this.cheeze = true
        this.pepperoni = true
    }
}

const burgerWithCheezeAndPeperoni = new BurgerWithPeperoniAndCheeze(20)
// В данном примере видно насколько много нужно было бы насоздавать интерфейсов
// Чтобы удовлетворить потребности всех покупателей разными бургерами

// Второй плохой пример
class WrongBurger {
    constructor(size, cheeze, pepperoni, lettuce, tomato) {
        this.size = size
        this.cheeze = cheeze
        this.pepperoni = pepperoni
        this.lettuce = lettuce
        this.tomato = tomato
    }
}

const wrongBurger = new WrongBurger(12, true, false, true, false)
// В данном примере мы ушли от кучи интерфейсов, но появилась другая проблема
// Огромное колличество параметров, в данном случае их всего 5 ,
// но что бдует если засисмостей станет больше. Мы ох**ем.

// А вот и пример самого паттерна Строителя 
// Мы ушли от кучи интерфейсов и кучи зависимостей

class Burger {
    constructor(builder) {
        this.size = builder.size
        this.cheeze = builder.cheeze || false
        this.pepperoni = builder.pepperoni || false
        this.lettuce = builder.lettuce || false
        this.tomato = builder.tomato || false
    }
}

class BurgerBuilder {

    constructor(size) {
        this.size = size
    }

    addPepperoni() {
        this.pepperoni = true
        return this
    }

    addLettuce() {
        this.lettuce = true
        return this
    }

    addCheeze() {
        this.cheeze = true
        return this
    }

    addTomato() {
        this.tomato = true
        return this
    }

    build() {
        return new Burger(this)
    }
}

const burger = (new BurgerBuilder(14))
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build()