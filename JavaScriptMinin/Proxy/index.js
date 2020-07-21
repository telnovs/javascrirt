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






