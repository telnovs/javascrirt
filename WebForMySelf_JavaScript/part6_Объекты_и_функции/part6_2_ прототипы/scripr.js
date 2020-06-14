// создание функции как класса, следует в верхнем регистре
function Car(name, year){
    this.name = name // создание полей для новых классов
    this.year = year
}
//оздание метода в prototype класса Car
Car.prototype.getAge = function(){
    return new Date().getFullYear() - this.year
}
Car.prototype.color = 'white'

// создание нового обьекта
let bmw = new Car('BMW', 2019)
let ford = new Car('Ford', 2015)
console.log(ford)
console.log(bmw)

// переопределине цвета
ford.color = 'green'