
// создаем промис
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(function(){
            return resolve()
        },ms)
    })
}
// sleep(1500).then(function(){
//     console.log('1500')
// })
// sleep(3000).then(function(){
//     console.log('3000')
// })
//В Promise.all загружаем массив тех асинхронных функций, которые нам нужны.
// Результат срабатывает после загрузки последней функции
// Promise.all([sleep(1500),sleep(3000)]).then(function(){
//     console.log('Hello')
// })
// //race он срабатывает после отработки первой функции:
// Promise.race([sleep(1500),sleep(3000)]).then(function(){
//     console.log('Bay')
// })

//Пример
let p1 =  sleep(1500).then(function(){
    //возвразаем обьект
    return {
        name: 'Promise 1500'
    }
})
let p2 =  sleep(3000).then(function(){
    //возвразаем обьект
    return {
        name: 'Promise 3000'
    }
})
let p3 =  sleep(5000).then(function(){
    //возвразаем обьект
    return {
        name: 'Promise 5000'
    }
})
Promise.all([p1,p2,p3]).then(function(data){
    console.log('Hello',data)
})
//со стрелочной фенкцией
Promise.race([p1,p2,p3]).then(data => console.log('Bay',data))


// метод  all race  возвращают так же  промисы
//Эти методы работают с async/await.
let d1 =  sleep(2000).then(function(){
    //возвразаем обьект
    return {
        name: 'Promise 2000'
    }
})
let d2 =  sleep(4000).then(function(){
    //возвразаем обьект
    return {
        name: 'Promise 4000'
    }
})
let d3 =  sleep(6000).then(function(){
    //возвразаем обьект
    return {
        name: 'Promise 6000'
    }
})
// В ЭТОМ примере промисы отработают одновремено после тога как пройждет все время
async function start(){
    let dataAll = await Promise.all([d1,d2,d3])
    let dataRace = await Promise.race([d1,d2,d3])

    console.log('all',dataAll)
    console.log('Race',dataRace)
}
start()