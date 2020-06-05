/* создаем переменные */
var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $result = document.querySelector('#result')
var isGameStarted = false
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')

var score = 0
/*стваим обработчик событий на кнопку старт*/
$start.addEventListener('click', startGame)
/*Ставим прослушку события*/
$game.addEventListener('click', hedleBoxClick)

/*создаем функцию startGame*/
/* запуск игры*/
function startGame() {
    score = 0
    setGameTime()
    $timeHeader.classList.remove('hide')
    $resultHeader.classList.add('hide')
    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')
    /*Создаем интервал */
    let interval = setInterval(function(){
        let time = parseFloat($time.textContent)
        if (time <=0){
            clearInterval(interval)
            endGame()
        }else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    },100)
    /* вызываем фунцию */
    rendorBox()
}
/* Создаем функции*/
function setGameTime(){
    let time = 5
    $time.textContent = time.toFixed(1)
}
function setGameScore(){
    $result.textContent = score.toString()
}

function endGame(){
    isGameStarted = false
    setGameScore()
    $start.classList.remove('hide')
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    $timeHeader.classList.add('hide')
    $resultHeader.classList.remove('hide')

}

function hedleBoxClick(event){
    if(!isGameStarted){
        return
    }
    if(event.target.dataset.box){
        score ++
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