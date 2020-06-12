//случайное число
console.log(Math.random())
 let num = 2.4
// округление числа
console.log(Math.floor(num)) // всегда округляет в меньшую сторону
console.log(Math.ceil(num)) // всегда округляет в большую сторону


// создание обьекта
let person = {
    name: 'Max',
    age: 26,
    car: {
        model: 'Ford'
    },
    job: 'Frontend',
    freinds: ['Elena', 'Victor', 'Ivan']
}

// Превращаем обьект в строку с помощью глобального обьекта JSON и функции stringify
let  str = JSON.stringify(person)
console.log(str)
// обратное действие превращаем строку в обьект с помощью функции parse
console.log(JSON.parse(str))
