// создаем прошлуску событи
document.querySelector('button').addEventListener('click', function(event){
    let value   = document.querySelector('input').value
//создание обьекта
    let obj = {
        text:value
    }
    // глобальный обьек localStorage
    //для сохранение обьетов в localStorage нужен метода setItem
    // первый параметр передаем название, вторым значение в строковом формате
    localStorage.setItem('headerText', JSON.stringify(obj))

})
// добовляем прослушку событий
document.addEventListener('DOMContentLoaded', function(){
    // пустой обьект  для устранение ошибки
    let obj = {}
    // создаем обработчик ошибок
    try {
        //парсим обьект и  забираем текст  из localStorage с помощью метода getIte
        obj = JSON.parse(localStorage.getItem('headerText'))
    }catch (e){}


    //создаем условия
    // если в obj не пустая страка (функция trim удаляет пробелы в тексте )
    if (obj && obj.text && obj.text.trim()) {
        // забираем тект с h1
        document.querySelector('h1').textContent = obj.text
    }
    })