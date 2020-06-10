// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

let div = document.querySelector('#playground')
let p = document.querySelectorAll('.text')
let h1 = document.querySelector('h1')
let input = document.querySelector('input') // получаем заначение input

div.innerHTML = '<h2 style="color: red;">From javascript</h2>' //динамичесое  изменения содержимого div
h1.textContent = 'Changed from JS'// изменение текста
console.log(input.value)//смотрим что лежит в input
console.log(div.innerHTML)// свойство innerHTML показывает содержимое в строковом формате
console.log(p)
console.log(h1.textContent)// смотрим текст