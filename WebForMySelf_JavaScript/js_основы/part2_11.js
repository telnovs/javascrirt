 let carYear = 2017
 let personYear = 1990
    // cоздание функции, функция принимает параметр на входе
    //
 function calcileteAge(age) {
    let currentYear = 2020           // создание переменной в функции
    let result  = currentYear - age // вечесляем из переменной входящий параметр
    return result                   // возвращем полученный результат
 }

 function checkAngLodgAdge(year, name ,compareTo ) {
    if(calcileteAge(year) < compareTo){
        console.log('Возраст ' +name + ' меньше '+compareTo+' лет')
    }else {
        console.log('Возраст ' +name + ' больше '+compareTo+' лет')
     }
 }

 checkAngLodgAdge(carYear,'ford', 20 )
 checkAngLodgAdge(personYear,'Victor',50 )
 calcileteAge(58)