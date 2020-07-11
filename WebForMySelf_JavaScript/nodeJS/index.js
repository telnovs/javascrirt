// подключаем express
const express = require('express')
// подключаем body-parser
const bodyParser = require('body-parser')
//импортируем weather.request
const weatherRequest = require('./requests/weather.request.js')

//создаем переменную которая отвечает за все приложение
const app = express()

//говорим что по умолчанию у нас идут файлы ejs
app.set('view engine','ejs')

//подключем css
app.use(express.static('public'))
//добовляем функционал нашему приложению для получения данных в request.body
app.use(bodyParser.urlencoded({extended: true}))

// при запросе на корневую страницу нашего приложения методом get мы будем рендорить файл
// index с раширением ejs
app.get('/',(req, res) => {

    res.render('index')
})

//обработка POST запроса
//request - отвечает за то что мы отправляем(обращаемся) в данном запросе
//response - отвечает за то что мы отвечаем на данный зарпрос
app.post('/',async (req,res) =>{
    //получение значения инпута
    const { city } = req.body
    //вызываем функцию
    const {weather,error} = await weatherRequest(city)
    // возвращаем туже страеицу но с изменнемыми параметрами
    res.render('index')
})

//создаем функцию  listen где первый значением передаем порт на котором слушать приложение
// вторым праметром передаем коллбек функцию
app.listen(3000, () => {
    console.log('Server has started on port 3000 ')
} )