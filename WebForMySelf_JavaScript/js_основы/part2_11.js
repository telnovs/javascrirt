 let carYear = 2017
 let personYear = 1990
    // cоздание функции, функция принимает параметр на входе
    //
 function calcileteAge(year) {
    let currentYear = 2020           // создание переменной в функции
    let result  = currentYear - year // вечесляем из переменной входящий параметр
    return result                   // возвращем полученный результат
 }

 function checkAngLodgAdge(year) {
    if(calcileteAge(year) < 10){
        console.log('Возраст меньше 10 лет')
    }else {
        console.log('Возраст больше 10 лет')
     }
 }

 checkAngLodgAdge(carYear)
 checkAngLodgAdge(personYear)