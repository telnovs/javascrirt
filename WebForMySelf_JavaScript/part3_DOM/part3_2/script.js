// let div = document.getElementById('playground') // доступ к элементу по id
// let p = document.getElementsByClassName('text')// доступ к элементу по class
// let h1 = document.getElementsByTagName('h1') // доступ к элементу по тегу
//
// console.log(div)
// console.log(p)
// console.log(h1)

// доступ к  class -> .CLASS_NAME
//  доступ к id -> #ID
let div = document.querySelector('#playground') // querySelector редоставляет доступ к одельному элементу
// если нем нужен забрать элемент по классу, тогда не обходимо в паретрах узакать класс начиная с точки(.)
//елс нам нужно забрать елемент по id то начинаем писать со знака решетки(#)
let p = document.querySelectorAll('.text')

let h1 = document.querySelector('h1')
// доступ к непосредственно к нужному списку прописываем путь
let ul = document.querySelector('div#playground > div ul')

console.log(div)
console.log(p)
console.log(h1)
console.log(ul)