
    /*  this он указывает на тот обькт в контескте кторого вызванно. то есть
        что стоит слева от точки где мы вызваем данную функцию например window.hellp()
        то при вызове вместо this вызовиться обьект window

       this свегда динамичное оно указывает на тот обьект в контесте которого
        оно было вызвавоно
     */

// создаем функцию
function hello(){
    //this указывает на текущий контекст
    console.log('Hello', this)
}

//создаем обьект
const person = {
    // создаем поля у обьекта
    name: 'Mark',
    age: 34,
    //создаем функцию
    seyHello: hello,
    //создаем функцию которая будет передовать в контексте обьетк window
    seyHelloWindow: hello.bind(this),
    // создаем функцию с параметром job
    logInfo: function(job, phone) {
        // создаем заголовок с помощью group
        console.group(`${this.name}, info:`)
        // равносильно записи this.name и person.name
        console.log(`Name is  ${this.name}`)
        console.log(`Age is  ${this.age}`)
        //job идет без this так как он передается в фунцию
        console.log(`Job is ${job}`)
        // выводим еще и телефон
        console.log(`Phone is ${phone}`)
        //закрываем заголовок
        console.groupEnd()
    }
   }

const lena = {
    name: 'Lena',
    age: 25
}
    const sergey = {
        name: 'Sergey',
        age: 48
    }
    const serg = {
        name: 'Serg',
        age: 35
    }
/*
    выведим обьек lena через функцию logInfo так как мы в функции bind передали обьект
    lena то this.name и this.age  будут указывать на обьек lena. bind может еще принимать
    следующие параетры которые нужны для функции
*/
person.logInfo.bind(lena,'worker', '8-999-999-99-99')()
    // метод call делает то же что и метод bind, только он сразу вызывется
    person.logInfo.call(sergey,'farmer', '8-999-999-99-00')
    // метод apply отличается от call только что вторым параметром идет у него массив
    person.logInfo.apply(serg,['policeman', '8-000-111-22-00'])


    ///==================================================================///
    ///======================== практика ================================///
    ///==================================================================///

    // создаем массив
    const  array = [1, 2, 3, 4, 5 ]
    const  array2 = [6, 7, 8, 9, 10 ]
    // создаем функцию которая будет каждое число массива умнажать на число которое ввели
    // на входе получаем массив и число на которое надо умнажать
    function multBy (arr, n){
        //возвращчем новый массив через map
        // на каждой эпатпе каждое число массива i умнажаем n
        return arr.map(function(i){
            return i * n;
        })
    }
    console.log(multBy(array, 56))

    /// сдаем так же только с протатипами
    Array.prototype.multBy2 = function(n) {
        return this.map(function(i) {
            return i * n;
       })
     }
   console.log( array2.multBy2(6))