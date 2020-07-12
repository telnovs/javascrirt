//подключаем jquery
import  $ from 'jquery'

//создаем заголовок с промощью jquery
$('<h1 />')
    // передаем текст в заголовок
    .text('Hello jquery')
    // подключим  стили
    .css({
        textAlign: 'center',
        color: 'blue'
    })
    //ставляем текст в хедер
    .appendTo($('header'))