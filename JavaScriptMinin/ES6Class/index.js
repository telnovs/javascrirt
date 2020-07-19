// обыкновенный обьект 
// const animal = {
// 	name: 'Animal',
// 	age: '7',
// 	hasTail: true
// }

// создаем класс, классы пишуться всегда с заглавной буквы 
class Animal {
	// еще в классе можно реализовать статические методы или переменные
	// если метод или переменная являеться статическоЙ, то она доступна только у самого класса  
	static type = 'ANIMAL'

	// для того что бы проинициализировать значения обьекта данного класса
	// реалируеться специальный метод 
	/// в конструктор принимаеться некоторый обьект 
	constructor(options){
	//для того то бы были поля необходимо проинициализировать их через this
	this.name = options.name
	this.age = options.age
	this.hasTail = options.hasTail
	}
	// реализеум метод который потом можно будеть реализовать в обьетке
	voice(){
		console.log('I am Animal')
	}
}	

//создаем обьект animal с помощью класса
// const animal = new Animal({
// 	name: 'Animal',
//  	age: '7',
//   	hasTail: true
// })

// создадим полноценное наследование от класса 
class Cat extends Animal{
	static tapy = 'Cat'

	constructor(options){
		/*  если мы реализуем constructor в дочернем классе нам необходимо сначала вызвать метод super, который 
			являеться constructorом родительского класса
			в метод super мы должны передать набор опций 
		*/ 
		super(options)
		this.color = options.color
	}
	// дочернем классе мы можем перезаписать родительские методы 
	voice(){
		console.log('I am cat Vasiliy')
		// так же мы можем вызвать и родительский метод через super
		super.voice()	
	}

	// так же в классах реализованны геторры (get) и сетторы (set)
	get ageInfo() {
		return this.age * 6 
	}
	// делаем установку для ввода нового возраста 
	set ageInfo(newAge) {
		this.age = newAge
	}
}

//создаем обьект
const cat = new Cat({
	name: 'Vasiliy',
  	age: '5',
   	hasTail: true,
   	color: 'black'
})



// практический пример

class Component {
	// конструктор принимает параметр селектор 
	constructor(selector){
		// создаем приватное поле( обычно через доллар $ называеються те перемееные которые содержать в себе дом ноду ) 
		this.$el = document.querySelector(selector)
	}

	//создаем метод для скрытия 
	hide(){
		this.$el.stale.display = 'none' 
	}

	// создаем метод для показа
	show(){
		this.$el.stale.display = 'block'
	}
}


class Box extends Component {
	constructor(options){
		// после того как мы вызываем метод super нам доступна переменная $el с которой мы можем работать в классе  Box
		super(options.selector)

		this.$el.style.width = this.$el.style.height = options.size + 'px'
		this.$el.style.background = options.color 
	}
}
	
const box1 = new Box ({
	selector: '#box1',
	size: 100,
	color: 'red'
}) 

const box2 = new Box ({
	selector: '#box2',
	size: 150,
	color: 'blue'
}) 


class Circle extends Box{
	constructor(options){
		super(options)

		this.$el.style.borderRadius = '50%'
	}
}

const circle = new Circle ({
	selector: '#circle',
	size: 200,
	color: 'yellow'
})