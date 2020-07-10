// подключаем express
const express = require('express')

//создаем переменную которая отвечает за все приложение
const app = express()

app.get('/',(req, res) => {
    res.end('Hello from node js')
})

//создаем функцию  listen где первый значением передаем порт на котором слушать приложение
// вторым праметром передаем коллбек функцию
app.listen(3000, () => {
    console.log('Server has started on port 3000 ')
} )