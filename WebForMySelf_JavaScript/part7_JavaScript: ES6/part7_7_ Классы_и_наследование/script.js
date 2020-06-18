// иерархия как будем делать
// RootElement <= Box <= instances

//  создание класса
class RootElement{
    //Создаём ключевую функцию Constructor для инициализации класса.
    //По умолчанию, аргументом конструктора (tagName) будет создавать div.
    constructor(tagName ='div') {
        //Для создания элемента создадим поле в конструкторе
        // создаеться див элемен
        this.$el = document.createElement(tagName)
        //создается отступы в элементе
        this.$el.style.marginBottom = '20px'
     }
     // Создаем метод для скрытие обьекта
     hide(){
        this.$el.style.opacity = '0'
     }
     show(){
        this.$el.style.opacity = '1'
     }
    // Создаем метод
     append(){
         // вставим  элемент в html
         document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el)
         return this
     }

}
//Создадим класс, который наследуется (extends) от RootElement.
//
class Box extends RootElement{
    constructor (color, size = 150, tagName){
        //взываем коструктор или метод  у родительского класса с помощью super()
        super(tagName)
        // сохроняем color, size в приватных переменных
        this.color =  color
        this.size = size
    }
    // создаем метод
    create(){
        // задаем параметры созданному диву
        this.$el.style.background = this.color
        this.$el.style.width=this.$el.style.height = `${this.size}px`
        // вставим данный элемент в html
       this.append()
        return this
    }
}
// создаем новый класс и наследуемся от RootElement
class Circle extends RootElement{
    constructor (color){
        super()
        this.color = color
    }
    create(){
        // задаем параметры созданному диву
        this.$el.style.borderRadius = '50%'
        this.$el.style.width=this.$el.style.height = `150px`
        this.$el.style.background = this.color
        // вставим данный элемент в html
        this.append()
        return this
    }
}

const redBox = new Box('red', 100, 'div').create()
const blueBox = new Box('blue').create()

const circle = new Circle ('green').create()

// создаем события для элемента
circle.$el.addEventListener('mouseenter', () =>{
    circle.hide()
})

circle.$el.addEventListener('mouseleave', () =>{
    circle.show()
})