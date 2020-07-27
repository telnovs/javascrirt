const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}

// Spread - как бы разварачивает обьекты и массивы и служит для создания новых массивов или обьектов
// или для трансформации их в более удобные типы данных
console.log(...citiesRussia)
console.log(...citiesEurope)
//возможно сконкатенировать массивы и любой другой элемнт
const allCities = [...citiesEurope,'Kemerovo', ...citiesRussia]
// const allCities = citiesEurope.concat(citiesRussia) старый метод
console.log(allCities)
// необходимо вкладывать в обькт {} оператор spread что бы вывести в консоль
// перезапись значения, который будет последний тот и выводиться
console.log({...citiesRussiaWithPopulation})
console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})

/// Practice
const numbers = [5, 37, 42, 17]
console.log(Math.max(5, 37, 42, 17))
// Math.max работает только с массивами, по этому оператор spread разварачивает массив и Math с ним работает
console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers) //старый подход

// получаем доступ до элемента дом нод
const divs = document.querySelectorAll('div')
const nodes = [...divs] // конвектиру NodeList в обычный массив с помощью spread
console.log(divs, Array.isArray(divs))//Array.isArray(divs) - проверка на массив
console.log(nodes, Array.isArray(nodes))

/// Rest - собирает все параметры или в массив или в обьктвсе остальные поля
function sum(a, b, ...rest) { // rest автоматически допишет все значения в массив
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(sum(...nums))

// const a = nums[0]
// const b = nums[1]

const [a, b, ...other] = nums
console.log(a, b, other)

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...address} = person

console.log(name, age, address)
