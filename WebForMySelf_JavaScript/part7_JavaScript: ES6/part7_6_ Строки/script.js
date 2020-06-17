
//const createLink =({path,name}) => '<a target="_blank" href="'+path+'">'+name+'</a> >'
// использование обратные кавычки ` `
const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

const ul = document.querySelector('ul')

//В строках для того, чтобы не писать много конкатенации, ввели в использование обратные кавычки ` `.
// Чтобы вплетать в текст в обратных кавычках переменные, используется конструкция ${varName}.
const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`

const yandex = `<li>${createLink({path: 'https://ya.ru', name: 'Yandex'})}</li>`
//При вставке используем insertAdjacentHTML:
ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', yandex)
//Обратные кавычки полностью сохраняют форматирование с переносами и пробелами:
const strToLog = `
  Hello 
  World
    I am 
      New tab
`

console.log(strToLog)