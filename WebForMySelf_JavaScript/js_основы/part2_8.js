let currentYear = 2018
let carName = 'Ford'
let carYear = 2014
let carAge = currentYear - carYear

// если в.м. меньше 5 лет ...
// если в.м. больше или равно 5 лет и меньше или равно 10 лет ...
// иначе другое сообщение

if (carAge < 5) {
    console.log(carName + ' младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
} else {
    console.log('Возраст ' + carName + ' равняется ' + carAge + ' годам')
}

// 0 null undefined '' NaN  значение при проверке будет false

let str = 'Hello'

if (null) {
    console.log('Значение true')
} else {
    console.log('Значение false')
}