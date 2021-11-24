// Это пораждающий паттерн проектировния 
// Который определяет общий интерфейс для создания объектов
// Позволяя подклассам изменять тип создаваемых объектов

// Предположим у нас есть программа , которая умеет перевозить груз только по суше
// Но вдруг нам необходимо переезти груз по воде или воздуху , тут пригодится ФАБРИКА

// Объекты создаются не при помощи new но при помощи вызова фабричного метода 
// (Под копотом все равно new)

// Неоходим один и тот же интерфейс

class Developer {
    askQuestions() {
      console.log('Asking about design patterns!')
    }
}
  
  class CommunityExecutive {
    askQuestions() {
      console.log('Asking about community building')
    }
}
  class HiringManager {
        
    takeInterview() {
        const interviewer = this.makeInterviewer()
        interviewer.askQuestions()
    }
}
class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Developer()
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive()
    }
}

const devManager = new DevelopmentManager()
devManager.takeInterview() // Asking about design patterns

const marketingManager = new MarketingManager()
marketingManager.takeInterview() // Asking about community buildng.