const myNamber = 42
// // удаление ключа
// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// // устанавливаем значение с помощью setItem  в локалсторедж, там должы храниться только строковые значения
// localStorage.setItem('number', myNamber.toString())
// // смотрим что получил localStorage с помощью getItem
// console.log(localStorage.getItem('number'))
// // чистим localStorage
// localStorage.clear()
//
// const obj = {
//     name: 'Mark',
//     age: 35
// }
//
// localStorage.setItem('person',JSON.stringify(obj))
// const raw = localStorage.getItem('person')
// const person = JSON.parse(raw)
// person.name = 'Sregey'
//
// console.log(person)
///*********************************************///
// синхронизируем приложение если оно открыто в разных вкладках
// window.addEventListener('storage',ev => {
//     console.log(ev)
// })
/// альтернатива
window.onstorage = event => { console.log(event)}

