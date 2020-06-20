// /*
// как происходит  взаимедейстивет  клиента и сервера
// Client -> Server -> DataBase -> Server -> Client
//  */
//
//
console.log('Клиент: хочу получить список пользователей')
console.log('...')
//
// setTimeout(function() {
//     console.log('Сервер: запрашиваю список пользователей в БД')
//     console.log('...')
// ///колбеки функции
//     setTimeout(function() {
//         console.log('БД: формирую список пользователей')
//         console.log('...')
//
//         setTimeout(function() {
//             console.log('Сервер: трансформирую данные для клиента')
//             console.log('...')
//
//             setTimeout(function() {
//                 console.log('Клиент: получил данные и отображаю их')
//             }, 1000)
//         }, 500)
//     }, 500)
// }, 1000)

//Создаем обькт Promise
//Функция Promise выполняется немедленно. Конструктор промиса выглядит следующим образом:
let promise = new Promise(function(resolve,reject){
    //В функцию промиса вставляем какой-либо код. Затем мы сами сигнализируем промису о том, когда он закончился.
    // Функция resolve (которая является аргументом конструктора) вызывается тогда, когда мы закончили асинхронную операцию.
    // Reject сигнализирует об ошибке.
    setTimeout(function() {
        console.log('Сервер: запрашиваю список пользователей в БД')
        console.log('...')
        resolve()
    },1000)
    })
//У промиса есть ещё один метод then.
// Когда что-то выполнится, мы можем воспользоваться результатом.
// Then принимает коллбэк, который снова что-то выполняет.
// Всё это мы оборачиваем в новый промис:
promise.then(function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            //создаем данные
           let users = [
                {uid: 'id1', name: 'Maxim'},
                {uid: 'id2', name: 'Elena'}
            ]
            // описание ошибки
            // reject('БД не смогла получить список пользователей')
            console.log('БД: формирую список пользователей', users)
            console.log('...')
            //если в функции resolve передать данные то они доступны вследующий цепочке
            resolve(users)
        }, 500)
    })
})
    //Но можно не погружаться далее, а возвращать сразу промис,
    // из которого после выполнения можно снова по цепочке выполнять его метод then:
    //
    .then(function(dbUsers) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('Сервер: трансформирую данные для клиента')
                console.log('...')
                //трансформируем данные через map
                let users = dbUsers.map(function(user) {
                    return {
                        id: user.uid,
                        firstName: user.name,
                        // числове значение времени в милисекундах
                        timestamp: Date.now()
                    }
                })
                resolve(users)
            }, 500)
        })
    })
//Ещё один метод промиса – это catch, который отлавливает ошибки.
// Его можно поставить в самом конце цепи операций,
// и он пробросит наверх ту ошибку, которая может встретиться на любом уровне выполнения нашего кода.
    .then(function(users) {
        setTimeout(function() {
            console.log('Клиент: получил данные и отображаю их', users)
        }, 1000)
    })
    .catch(function(error) {
        console.error(error)
    })