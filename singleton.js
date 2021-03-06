// Одиночка — это порождающий паттерн проектирования, 
// который гарантирует, что у класса есть только один экземпляр,
// и предоставляет к нему глобальную точку доступа.

// В общем смысл в том, что мы скрываем конструктор и создаем только 1 
// публичный метод , который позволяет отслеживать жизненный цикл объекта одиночки 
// В нашем случае это президент , все что мы можем это лишь получить его имя и на этом все

const president = (function(){
    const presidentsPrivateInformation = 'Super private'

    const name = 'Turd Sandwich'

    const getName = () => name

    return {
        getName
    }
}())
president.getName() // 'Turd Sandwich'
president.name // undefined
president.presidentsPrivateInformation // undefined

// Спросишь, ЧЕГО БЛИН ? И зачем ?
// Смысл в том, что нам необходимо дать доступ к базе данных из любой точки приложения 
// И сделать это нужно так, чтобы никто не мог повлиять на нашу базу данных.
// То бишь у нас будет только один экземпляр класса

// То бишь клиент без понятия как мы создали этот объект. 
// И сто процентов, что никакой код не заменит ранее созданный экземпляр =)