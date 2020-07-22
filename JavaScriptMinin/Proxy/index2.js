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

// // Optimization
// const IndexedArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {}
//     args.forEach(item => (index[item.id] = item))

//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch (prop) {
//           case 'push':
//             return item => {
//               index[item.id] = item
//               arr[prop].call(arr, item)
//             }
//           case 'findById':
//             return id => index[id]
//           default:
//             return arr[prop]
//         }
//       }
//     })
//   }
// })

// const users = new IndexedArray([
//   { id: 11, name: 'Vladilen', job: 'Fullstack', age: 25 },
//   { id: 22, name: 'Elena', job: 'Student', age: 22 },
//   { id: 33, name: 'Victor', job: 'Backend', age: 23 },
//   { id: 44, name: 'Vasilisa', job: 'Teacher', age: 24 }
// ])
