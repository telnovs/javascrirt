const requestURL = 'https://jsonplaceholder.typicode.com/users'

// оборачиваем все в промисы
function sendRequest(method, url, body = null) {
    return new Promise(function(resolve, reject) {
        //XMLHttpRequest
        const xhr = new XMLHttpRequest()
//открываем соединение
// 1 параметром передаем метод по которому будем делать запрос
// 2 параметром передаем строчку которая являеться url
        xhr.open(method, url)

//один вариантов превратить данные из строки в обьект с помощью метода JSON
        xhr.responseType = 'json'
        // явно указываем что мы отправляем данные в формате JSON
        xhr.setRequestHeader('Content-Type', 'application/json')

//перед тем как отправить запрос необходимо обработать данные получаеммые с сервера
// создаем нового слушателя
        xhr.onload = () =>{
            // обрабатываем ошибки
            // status это ответ ответы сервера
            if(xhr.status >=400){
                reject(xhr.response)
            } else{
                resolve(xhr.response)
            }
            //еще вариант превратить данные из строки в обьект с помощью метода JSON.parse
            // console.log(JSON.parse(xhr.response))
        }
// обработчик ошибок
        xhr.onerror = () => {
            reject(xhr.response)
        }
// отправляем запрос
        // делаем из обькта body строчку
        xhr.send(JSON.stringify(body))
    })
}

// sendRequest('GET', requestURL)
//     .then(data =>console.log(data))
//     .catch(err => console.log('err'))
const body = {
    name: 'Mark',
    age: 34
}
// телом запроса являються обькты
sendRequest('POST', requestURL, body)
    .then(data =>console.log(data))
    .catch(err => console.log('err'))