//создаем функцию с одним параметром
function getAge(year ){
    // создаем константу для вычестлее текущий даты через обьек Date и вызывем метод getFullYear
    const current = new Date().getFullYear()
    return current - year
}
console.log(getAge(1986))

// стрелочная функция
// Стрелочные функции лучше объявлять с помощью const.
// const funcName = () => {
//     return result;
// };
const newgetAge = (year) =>{
    const current = new Date().getFullYear()
    return current - year
}
console.log(newgetAge(1986))
// стрелочная функция c одним параметром
const newgetAge2 = year =>{
    const current = new Date().getFullYear()
    return current - year
}
console.log(newgetAge2(1986))
//можно укоротить запись
const newgetAge3 = year =>{
    return new Date().getFullYear() - year
}
console.log(newgetAge3(1986))
// если тело функции состоит из одной строкчки то можно не писать return и фигурных скобок
const newgetAge4 = year => new Date().getFullYear() - year

console.log(newgetAge4(1986))

// или можно так
const newgetAge5 = year => console.log(new Date().getFullYear() - year)
newgetAge5(1986)

// Преимущество стрелочной функции – нет собственного контекста.
// Будет использовать вышестоящий контекст:
    const person = {
        age: 24,
        firstName: 'Mark',
        LogNameWithTimeout(){
            setTimeout(()=> {
                console.log(this.firstName)
            },1000)
        }
    }