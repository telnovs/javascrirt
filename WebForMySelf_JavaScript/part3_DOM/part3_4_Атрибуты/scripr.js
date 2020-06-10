let a = document.querySelector('a')
console.log(a.getAttribute('href'))// получаем содержимое атрибута href
 let oldHref = a.getAttribute('href') // можно исрользовать как переменную

console.log(a.getAttribute('title'))
console.log(a.attributes)// получение всех атрибутов в качестве обьекта

a.setAttribute('title', 'Go to Yandex')
 a.setAttribute('href' , 'https://ya.ru')// изменяет параметра атрибута
a.textContent = 'Yandex'// изменение текста в