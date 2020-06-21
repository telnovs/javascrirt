//получем доступ к button
document.querySelector('button').addEventListener('click', load)
//
// // Cоздание фенкции load
// function load(){
//     //создаем пременную с url адресом
//     let url = 'https://jsonplaceholder.typicode.com/users'
//     //Fetch - это удобный современный API для извлечения сетевых ресурсов.
//     //Метод fetch() принимает один обязательный аргумент —  путь к данным, которые вы хотите получить.
//     //Метод fetch() принимает один обязательный аргумент —  путь к данным, которые вы хотите получить.
//     // Он возвращает promise, который разрешается в (Response) независимо от того, был ли запрос удачным
//     fetch(url)
//     // обрабатываем промис  с помощью then c параметром response(то что отпрватит сервес)
//         .then(function(response){
//             //Приводим данные к json формату
//            return  response.json()
//         })
//
//         .then(function(data){
//             let ul = document.querySelector('#list')
//             //проходим по массиму data и приводим каждый элемент массива к обному тегу li
//             // для эжтого формируем общию строку
//             // создаем переменную и проходим по массиму data c помощью map
//             let html = data.map(function(item){
//                 // возвращаем строку
//                 return '<li>' + item.id + ' ' + item.name + ' (' + item.email +  ')</li>'
//             })
//            //ложим в пустой список ul помощью метода insertAdjacentHTML
//             //insertAdjacentHTML() разбирает указанный текст как HTML или XML
//             // и вставляет полученные узлы (nodes) в DOM дерево в указанную позицию.
//             // Данная функция не переписывает имеющиеся элементы,
//             // что предотвращает дополнительную сериализацию и поэтому работает быстрее, чем манипуляции с innerHTML.
//             // первый параметр узывает место положение кужа необходимо положит
//             // и формируем строчку html.join(' ')
//             ul.insertAdjacentHTML('afterbegin',html.join(' '))
//         })
// }
//создание асинхронную функцию с помощью слова asyns
async function load(){
    let url = 'https://jsonplaceholder.typicode.com/users'
    let response = await fatch(url)
    // для распарсивония
    let data = await response.join()

    let ul = document.querySelector('#list')

    let html = data.map(function(item) {
        return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
    })

    ul.insertAdjacentHTML('afterbegin', html.join(' '))
}