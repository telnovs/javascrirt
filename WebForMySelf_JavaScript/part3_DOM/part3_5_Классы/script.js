
let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')

box1.classList.add('red')// добовляем класс
// box2.classList.remove('blue')//удаляем класс
let hasClass = box2.classList.contains('blue')// проверка есть ли класс или нет
console.log(hasClass)

if(hasClass){
    box2.classList.remove('blue')
}else{
    box2.classList.add('blue')
}