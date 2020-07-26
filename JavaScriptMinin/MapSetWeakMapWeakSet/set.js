// Set можно передовать любые значения и они будут храниться в еденственном экземпляре
const set = new Set ([1,2,3,3,3,4,4,4,5,5,5,6,7,7,8,9])
// добовляем новое значения
set.add(10).add(11).add(11).add(12).add(13)

//   console.log(set)
// // проверка на ключь  в булевоем значение
//   console.log(set.has(12))
// //узнать количество ключей
//   console.log(set.size)
// // удаление ключа
//   console.log(set.delete(1))
//   console.log(set.size)
// // очистка
//   console.log(set.clear())
//   console.log(set.size)

// получение ключей и значений - они одинаковые
// это для что бы была совместимость с Map
// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// for (let key of set ){
//     console.log(key)
// }

/////////*************  Пример **************//////////////

function unitValue(array) {
    return Array.from(new Set(array))
    // return [...new Set(array)]
}

console.log(unitValue([1,2,3,4,5,1,2,6]))