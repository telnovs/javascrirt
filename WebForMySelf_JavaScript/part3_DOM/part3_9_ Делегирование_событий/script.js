// let p = document.querySelectorAll('p') // забираем элемент

// for (var i = 0; i < p.length; i++) {// проходимся по всем элементам через  цикл
//   p[i].addEventListener('click', function(event) { // присваеваем каждому элементу клик и фунцию
//     event.target.style.color = 'blue'//через target добовляем стиль элементу
//   })// получаеться если кликнуть по элементу он поменяет цвет.
// }

// берем элемент wrapper создаем  событие клик по нему, добавляем анонимную функцию с параметром event
document.getElementById('wrapper').addEventListener('click', function(event) {
    // создаем переменную tagName и присваем ей название тега (event.target.tagName )в нижнем регистре toLowerCase
    let tagName = event.target.tagName.toLowerCase()
// создаем условия
// если переменная совпадает с тегом параграф (р)
    if (tagName === 'p') {
        event.target.style.color = 'blue' // присваеваем голубой цвет
    }
//создаем условия: если у нас в элементе есть класс ('color')
    if (event.target.classList.contains('color')) {
        event.target.style.color = 'red'// присваеваем красный цвет
    }
})
