// подключаем express
const express = require('express')

//создаем переменную которая отвечает за все приложение
const app = express()
//говорим что по умолчанию у нас идут файлы ejs
app.set('view engine','ejs')

//подключем css
app.use(express.static('public'))

// при запросе на корневую страницу нашего приложения методом get мы будем рендорить файл
// index с раширением ejs
app.get('/',(req, res) => {
    res.render('index')
})

//создаем функцию  listen где первый значением передаем порт на котором слушать приложение
// вторым праметром передаем коллбек функцию
app.listen(3000, () => {
    console.log('Server has started on port 3000 ')
} )