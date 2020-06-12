 let str = '0,1,2,3,4,5,6,7,8,9'
//получение  массива из строки через знак(separator)с помощью метода split
 let array = str.split(',')
 let array2 = str.split(',')
// соединение массива в сткроку с помощью метода join
 console.log(array.join(';'))
 // меняем порядок массива с помощью reverse()
 console.log(array.reverse())
// удаление элементов массива с помощью метода splice( 1 число  номер скакого удалит, 2 число кол-во элементов
//помощью метода splice можно и довалять элемент в массив или заменить занчение массива
 array.splice(1, 5) // просто удаление
 array2.splice(1, 0,'11')//добавление элемента
 array2.splice(10, 1,'100')//замещение элемента
 console.log(array2)
// обьединение массивов с помощью метода concat
 let newArray =array2.concat([500,1000])
 console.log(newArray)
// создание
let objArray =[
 {name:'Elena', age:32 },
 {name:'Rick', age:45},
 {name:'Marti', age:18}
]
 // поиск параметра с помощью метода find
 let  foundPerson = objArray.find(function(person){
  return person.age === 18
 })
 console.log(foundPerson)
 // фильтр параметров с помощью метода filter
 let oddArray =[0,1,2,3,4,5,6,7,8,9].filter(function(i){
  return i % 2 !== 0 /// сортировка на нечетные цифры
 })
 console.log(oddArray)
 // создание нового массива с помощью метода
 let oddArray2 =[0,1,2,3,4,5,6,7,8,9].map(function(i){
  return i * 2
 })
 console.log(oddArray2)