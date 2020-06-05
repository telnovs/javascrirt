/* создаем переменные */
var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

var store = 0
/*стваим обработчик событий на кнопку старт*/
$start.addEventListener('click', startGame)
/*Ставим прослушку события*/
$game.addEventListener('click', hedleBoxClick)

/*создаем функцию startGame*/
function startGame() {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')
    /* вызываем фунцию */
    rendorBox()
}
/* Создаем функции*/
function hedleBoxClick(event){
    if(event.target.dataset.box){
        store ++
        rendorBox ()
    }
}
function rendorBox () {

    $game.innerHTML = ''
    var box = document.createElement('div')
    let boxSize = getRandom(20,150)// создаем переменную с функцие которая рандомит числа в заданном диапозоне
    let gameSize = $game.getBoundingClientRect()// создаем переменную присваеваем ей значение
    //функции getBoundingClientRect с помощью которой определяем размеры поля game
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize
    box.style.height = box.style.width = boxSize +'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#144122'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    /*ложим данный созданую созданные html  в game */
    $game.insertAdjacentElement('afterbegin', box)
}
/*Создаем функцию для создание случайных чисель */

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}