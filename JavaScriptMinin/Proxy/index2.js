// Hidden properies
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
  	/*
  	  делаем проверку если свойство находитьсяв самом обьете(prop in obj) и данное свойство не начинаться с prefix 
  	  то тогда возвраеться true  
  	*/ 
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
    
    /*  ownKeys - свойствой которое говорит какие ключи действительно находяться внутри обьекта
    	на входе получем обькт, далее оброщаемся к обьекту Reflect и его методу ownKeys.
        далее фильтруем массив ключей которые начинаеются prefix , что бы ownKeys нам не возвращал 
        те ключи которые мы хотим скрыть 
    */ 
    ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),

    /* 
    	спрашиваем если prop находиться в receiver(Proxy - тоже самое), тотгда мы возвращаем jобькт по ключу prop (obj[prop])
    	иначе нам надо скрыть поле и пишем  void 0(тоже самое что и undefind
	*/
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
  })
}

const data = withHiddenProps({
  name: 'Mark',
  age: 5,
  _uid: '1231231' // это поле мы хотим скрыть
})



// optimization
// массив 
const userData = [
  { id: 1, name: 'Vladilen', job: 'Fullstack', age: 25 },
  { id: 2, name: 'Elena', job: 'Student', age: 22 },
  { id: 3, name: 'Victor', job: 'Backend', age: 23 },
  { id: 4, name: 'Vasilisa', job: 'Teacher', age: 24 }
]

// поиск ключей массива 
const index1 = {}
userData.forEach(i => index1[i.id] = i)


///реализуем поиск через Proxy

// создаем класс 
const IndexArray = new Proxy(Array, {
	construct(target, [args]){// ставит ловушку на мемент когда мы оброщаемся через ключевое слово new
		// создаем пустой обькт 
			const index = {}
			// походимся по всему массиву. на каждой операции получаем некоторый item и 
			//в переменную index по ключу item.id заносим значением item
			args.forEach(item => (index[item.id] = item))	

		return new Proxy( new target(...args), {
			// создаем ловушку на метод get( это когда мы обращаемся к какомо то свойству) 
			// она получает обьект  и некоторое свойство prop
			get(arr, prop){
				switch(prop){
					// оброщаемся к методу push
					case 'push': return item => {
						index[item.id] = item
						arr[prop].call(arr, item)
					}
					case 'findById': return id => index[id] 

					// если не один кейс не сработал возвращаем свойство к которому мы обращались
					default:
					 return arr[prop]
				}
			}
		})
	}
})


const users = new IndexArray([
  { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
  { id: 22, name: 'Elena', job: 'Student', age: 22 },
  { id: 33, name: 'Victor', job: 'Backend', age: 23 },
  { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
])














