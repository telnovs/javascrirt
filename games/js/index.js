let $start = document.querySelector('start')
/*стваим обработчик событий на кнопку старт*/
$start = addEventListener('click', startGame)

/*создаем функцию startGame*/
function startGame() {
    console.log('start')
    $start =classList.add('hide')
}