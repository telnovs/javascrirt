//создаем фунцию
let creatCounter = function (counterName) {
     //создаем локальную переменную
        let counter = 0
    return {
        increment: function() {
            counter++
        },
        decrement: function() {
            counter--
        },
        getCounter: function() {
            return counter
        }
    }
}
 let counterA = creatCounter('counter A ')
let counterB = creatCounter('counter B ')

counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()