//В JS, если мы работаем в браузере, есть глобальный объект Window.
// Есть метод setTimeout. Но его необязательно писать через точку после Window.
// Его вызов – первое проявление асинхронности.
// Другая функция – setInterval. Принцип тот же, только функция исполняется через определённый интервал.


//метод setTimeout
// первым параметром передается ФУНКЦИЯ  колбек, которая выполнеться через какое то время
// вторым параметром передаем количество милисекунд
 setTimeout( function(){alert('Hello') }, 2200)


//функция – setInterval
//первым параметром передается ФУНКЦИЯ  колбек, которая выполнеться через интервал и постоянно
// вторым параметром передаем количество милисекунд через которое бедут выводиться функция с интервалом
let counter = 0
let interval = setInterval(function(){
    console.log(++counter)
},1000)
// Третья функция – clearInterval. Помещаем в неё выполняемую функцию, и она очищается.
setTimeout(function() {
    clearInterval(interval)
}, 5 * 1000)

