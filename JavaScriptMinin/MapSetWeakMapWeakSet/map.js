// создаем обьект 
const obj = {
	name: 'Mark' ,
	age: 32,
	job: 'Fullstack'
}

// создаем массив 
const entries = [
['name','Mark'],
['age', '32'],
['job', 'Fullstack']
]

//переводим из обьекта в массив 
// console.log(Object.entries(obj));
//переводим из массива в обьект
// console.log(Object.fromEntries(entries))

// создаем Map класс
// В КЛАССЕ Map ключами могут выступать любые значения
const map = new Map(entries)
// получаем конкретное значение ключа
// console.log(map.get('NaN'))
//создаем новый ключ со значением в map
map
	.set('newField', 46)
	// передаем к качестве ключа обьект
	.set(obj, 'Value of object')
	// другое значения
	.set(NaN, 'NaN???' )
// console.log(map)
// console.log(map.get(NaN))
// // удаление ключа
// // map.delete('obj')
// // проверка на ключь  в булевоем значение
// console.log(map.has('obj'))
// //узнать количество ключей
// console.log(map.size)
// // очистка карты
// map.clear()
// console.log(map.size)

/*******************************************/
// получение ключа и значение из  map
// for (let [key, value ] of map){
// 	console.log(key, value)
// }

// получение только значение
// for (let val of map.values()){
// 	console.log(val)
// }
// // получение только ключей
// for (let val of map.keys()){
// 	console.log(val)
// }

// используем forEach того чтобы  пробежаться по всем значениям map
// map.forEach( (val, key, map) =>{
// 	console.log(val, key)
// })

/****************************************************************/

// const array = [...map]
// const array = Array.from(map)
// // получение обьекта из map
// const mapObj = Object.fromEntries(map.entries())
//
// console.log(mapObj)

/***************************************************************/
//********************* Пример ********************************/
const users = [
	{name: 'Alena'},
	{name: 'Vasiliy'},
	{name: 'Mark'},
	{name: 'Sergey'}
]
const visits = new Map()

visits
	.set(users[0],new Date())
	.set(users[1], new Date(new Date().getTime() + 1000 * 60))
	.set(users[2], new Date(new Date().getTime() + 5000 * 60))
	.set(users[3], new Date(new Date().getTime() + 7000 * 60))

function lastVisit(user){
	return visits.get(user)
}
console.log(lastVisit(users[0]))
console.log(lastVisit(users[1]))
console.log(lastVisit(users[2]))
console.log(lastVisit(users[3]))
console.log(lastVisit(users[4]))