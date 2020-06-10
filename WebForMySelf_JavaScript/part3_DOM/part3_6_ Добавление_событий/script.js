let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

function buttonHandler() {
    h1.textContent =input.value
}
h1.addEventListener('mouseenter', function(){ //обработчик событие с анонимной функцией
    this.style.color = 'red'
    this.style.backgroundColor = 'black'
    this.style.textAlign = 'center'
})
h1.addEventListener('mouseleave', function(){
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
    this.style.textAlign = 'left'
})

button.addEventListener('click', buttonHandler) //добовляем обработчик событие с помощью addEventListener(