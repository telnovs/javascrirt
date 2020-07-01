// создаем класс для наследование  и  экспортируем его
export  class Component {
    // конструктор принимает id
    constructor(id) {
        this.$el.document.getElementById(id)
           this.init()
        }

     // создаем пустой метод
    init(){}

    // Метод для скрытия
    hide(){
        this.$el.classList.add('hide')
    }
    // Метод для показа
    show(){
        this.$el.classList.remove('hide')
    }
}

