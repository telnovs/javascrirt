//alert просто сплываеющие окно с одной кнопкой
document.querySelector('#alert').addEventListener('click', function(event){
     alert('вы нажали на кнопку')
 })
// элемент confirm выводит окошко с двумя знамчениями
 document.querySelector('#confirm').addEventListener('click', function(event){
    // создаем переменную с которой в дальншем можем работать в зависимости от выбора пользователя
    let decision = confirm('нажмите что ни будь')

     if (decision){
         alert('вы нажали на кнопку')
     }
 })
// prompt окно с полем вода пользователя, есть поле по умолчанию
document.querySelector('#prompt').addEventListener('click', function(event) {
   let userName = prompt('Our name???', '')
//делаем проверку если пользователь ввел значение вывожим его в alert
    if (userName != null) {
        alert( 'Hello ' + userName)
    }else prompt('Our name???')
})

