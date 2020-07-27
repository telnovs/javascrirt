const requestURL = 'https://jsonplaceholder.typicode.com/users'

// оборачиваем все в промисы
function sendRequest(method, url, body = null){
    const headers = {
        'Content-Type':'application/json'
    }
    //вызываем метод fetch, fetch возвращает промис
    // первым параметром fetch принимает url
   return fetch(url, {
       // для метода post
       method: method,
       body: JSON.stringify(body),
       headers: headers
   }).then( response => {
       // обработка ошибок
       if(response.ok){
           // приводим запрос к тексту
           // return response.text()
           // или сразу парсим обькт
           return response.json()
       }
       return response.json().then( error => {
           // здаем свою ошибку
           const err = new Error('Ошибка')
           err.data = error
           throw err // выкидываем ошибку
       })
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