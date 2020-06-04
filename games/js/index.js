/* создаем переменные */
var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
/*стваим обработчик событий на кнопку старт*/
$start.addEventListener('click', startGame)
$game.addEventListener('click', hedleBoxClick)

/*создаем функцию startGame*/
function startGame() {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')
    /* вызываем фунцию */
    rendorBox()
}
function rendorBox () {
    var box = document.createElement('div')
    box.style.height = box.style.width = '50px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#144122'
    box.style.top = '50px'
    box.style.left = '40px'
    box.style.cursor = 'pointer'


    /*ложим данный созданую созданные html  в game */
    $game.insertAdjacentElement('afterbegin', box)
}