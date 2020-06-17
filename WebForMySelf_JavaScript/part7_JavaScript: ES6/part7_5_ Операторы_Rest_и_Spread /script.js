// забираем форму из DOM через querySelector
const form = document.querySelector('form')

//проверка собмитится ли наша форма пишем
// добовляем addEventListener через событие submit
// также добовляем функцию колбек которая принимает (event)  ввиде стрелочной функции
form.addEventListener('submit', event =>{
   //отменяем дефолтное знаначение
    event.preventDefault()
    //собираем значяение формы
    const title = form.title.value
    const text = form.text.value
    const description = form.description.value
    //вызваем метод  saveForm и передаем в него обьект
    saveForm(title,text,description)
} )

//вызваем метод который будет сохрянять нашу формуна сервер
//он принимает обьект дата
// function saveForm (data){
//     const formDate = {
//         date: new Date().toLocaleDateString(),
//         //что бы сохранит  поля text , title,description
//         title:data.title,
//         text: data.text,
//         description: data.description
//     }
//     console.log('Form date',formDate)
// }
//Деструктуризация из пришедших параметров делается подоб ным образом, только с квадратными скобками:
// function saveForm ({title, text, description}) {
//     const formDate = {
//         date: new Date().toLocaleDateString(),
//         //что бы сохранит  поля text , title ,description
//         title , text, description
//     }
//     console.log('Form date', formDate)
// }

// spread - нужен для того что бы разворачивать обьект
// Мы можем передавать весь объект свойств с помощью оператора spread:
// function saveForm (data) {
//     const formDate = {
//         date: new Date().toLocaleDateString(),
//         // оператора spread ... три точки(он создает новые ссылки на поля  )
//         // все зависимоти сколько будет лежать там полей в обькте мы все рано все их получим
//       ...data
//     }
//     console.log('Form date', formDate)
// }

// Rest применяеться для сбора свех параметров
// Rest же передаёт параметры в виде массива:
function saveForm (...args) {
    // Деструктуризация массива параметров
    const [title, text,description] = args
     const formDate = {
        date: new Date().toLocaleDateString(),
         title, text,description
    }
    console.log('Form date', formDate)
}