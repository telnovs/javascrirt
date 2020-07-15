/* Замыкания */

function  creatCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}
 //делаем замыкание функции
 // calc тоже функция
const calc = creatCalcFunction(3)
// вызываем функцию
calc()
// все
//////////////////////////////////////////////////////////////////////////////////

// примеры

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}
 const addOne = createIncrementor(1)
 const addTen = createIncrementor(10)

 console.log(addOne(10))
 console.log(addOne(50))

 console.log(addTen(10))
 console.log(addTen(50))


function urlGenerator(domain) {
    return function(url) {
        return `htps://${url}.${domain} `
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')




console.log(comUrl('google'))
console.log(comUrl('yandex'))

console.log(ruUrl('google'))
console.log(ruUrl('yandex'))


console.log(comUrl(''))