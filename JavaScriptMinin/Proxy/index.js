// proxy это некоторый класс в js который позволяет создавать различные ловушки для
// обьекта, функции, классов  и т.д.

// обьект
const person = {
	name: 'Mark',
	age: 3,
	job: 'baby'
} 

// прокситруем обьект person
// создаем новую переменную


 
// в конструктор данного класса Proxy мы должны передовать два параметра,
// terget -  это та цель на которую мы хотим повесить прокси 
// воторый параметром мы передаем 
//handler: объект, который определяет, какие операции будут перехвачены и как переопределить перехваченные операции.(ловушки ) 
const op = new Proxy(person, {
	get (target, prop){ // становка ловушки
		console.log('Target:',target) 
		console.log('Prop:', prop)
		return target[prop]
	},
	set(target, prop, value){
		if (prop in target){
			target[prop] = value
		} else {
			throw new Error(`No ${prop} field in target` )
 		}	
	},
	has(target, prop){
		 // has должен вернуть false of true
		 return ['age', 'name', 'job'].includes(prop)
	},
	deleteProperty(target, porp){ //данный метод позволяет удалить какое то свойство из обьекта  
		console.log('Deleting...', prop )
		delete target[prop]
		return true
	} 
})

// functions
//проксируем  функцию

// создаем функцию котораяф будет передовать текст с которому будем передовать 
const log =  text => `Log: ${text}`;

// создаем прокси 
const fp = new Proxy(log, {
	// отслеживаем когда функция будет вызываться с помощью apply
	//  apply принимает 3 параметра 
	// 1 - target - та функция над который мы проксируем  
	apply(target, thisArg, args){
		console.log('Loding  fp...')
		// возвращаем введенный текс в функции fp верхнем регистре 
		return target.apply(thisArg, args).toUpperCase() 
	} 
}) 

/// Classes 
 class Person {
 	constructor(name, age){
 		this.name = name
 		this.age = age
 	}
 }

const PersonProxy = new Proxy(Person, {
	// трап или ловушка для классов 
	construct(target, args){
		console.log('<<<<<<Construct>>>>>')
		// Базовое использование ловушки на конструктором 
		//return new target(...args)
		// добавим еще Proxy
		return new Proxy(new target(...args), {
			get (t, prop){
				console.log(`Getting prop ${prop}`)
				return t[prop]
			}
		})
	  } 
	})

const p = new PersonProxy('Mark', '3')

/**********************************Пример************************/

const person2 = {
	name: 'Mark',
	age: 3,
	job: 'baby'
} 

const example = new Proxy(person2, {
	get (target, prop){ // становка ловушки

		// если нет поля в таргет(обьекте) которое хотим получить  
		if(!(prop in target)){
			//
		return prop
			.split('_')
			.map(p => target[p])
			.join(' ')
		}
		return target[prop]
	}
	
})

// Wrepper
//Создаем стрелочную функцию принимающию 2 парметра 
const withDefaultValue = (target, defaulteValue = 0) => {
	return new Proxy(target, {
		// задаем get как стрелочную функуцию, чтобы записать в об=дну строчку 
		// принимает обьект и параметр prop
		// спрашиваем если prop находиться в обьекте (то тогда это означает что значение определенно и мы вернем обьект по 
		// ключу prop ((obj[prop])), а иначе если не определено то мы возвращаем дефолтное значение defaulteValue
		get: (obj, prop) => (prop in obj ? obj[prop] : defaulteValue)
	}) 
}

const position = withDefaultValue({
	// target
	x : 58,
	y : 33
   },
  0
)





