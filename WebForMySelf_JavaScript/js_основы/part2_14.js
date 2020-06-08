console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8 / 3) // 2.6666
console.log(0xAB)
console.log(2e3) // 2000
console.log(NaN) // not a number
console.log(typeof NaN)
console.log(123 / 0)

var fortyTwo = 42
var delta = 8 / 3

console.log(fortyTwo.toString()) // приводит число к сткроке
console.log(+delta.toFixed(1) + 4)// оператор + приводит строку к числу, а toFixed показывает сколько знаков будет после точки
console.log(parseFloat(delta.toFixed(2))) // 2.67 parseFloat парчит дробные числа
console.log(parseInt(delta.toFixed(2))) // 2 parseInt работает только с целыми числами

console.log(isNaN(NaN)) // isNaN проверят на число выдает true или false
console.log(isNaN(45))

console.log(isFinite(1 / 0)) // false //  isFinite проверяет на бесконечность
console.log(isFinite(9999999999)) // true