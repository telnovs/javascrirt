// Объекты в ES6.
// Чтобы вернуть объект без return, нужно обернуть объект в круглые скобки:
const createCar = (name, model) => ({name, model})

const ford = createCar('Ford', 'Focus')

console.log(ford)

const yearField = 'year'
// Можно создавать динамические ключи, в квадратных скобках:
const bmw = {
    name: 'BMW',
    ['model']: 'X6 Sport',
    [yearField]: 2018,
    // Для метода объекта не нужно ставить двоеточие
    logFields() {
        // С помощью деструктуризации убираем лишние слова в использовании переменных
        const {name, year, model} = this
        console.log(name, model, year)
    }
}

console.log(bmw)
bmw.logFields()

// const year = bmw.year
const {year} = bmw
console.log(year)
