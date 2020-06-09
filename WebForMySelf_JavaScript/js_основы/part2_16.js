const person = { /// создание
    //поля обьекта
    name: 'Василий', /// ключ  name со значением 'Василий'
    year: 1990, /// ключ year name со значением 1990
    family: ['Елена', 'Игорь'], // можно создавать массивы в виде ключа
    car: {              /// можно в обьект положить другой обьект
        year: 2010,
        model: 'Ford'
    },
    // метод обьекта
    calculateAge: function() {  // определяем коюч как метод добавлением слова function()
        this.age = 2018 - this.year // = person.year
    }
}

console.log(person)
console.log(person.name)  // доступ к ключу name в обьекте person
console.log(person['year']) // доступ через строковое значение person['year'] к ключу year
let field = 'car'
console.log(person[field].year)

person.year = 1993

console.log(person)

person.calculateAge()

console.log(person)
