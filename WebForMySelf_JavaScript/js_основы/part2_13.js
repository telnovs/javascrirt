
///////////////////////////
///////// Строки //////////
//////////////////////////
let str1 = 'Hello Word'
let str2 = "Hello word 2"

let personName = 'Victor'

let message = 'hello "'+ personName + '"'  //кавычки могут быть любыми но лучше исползовать одинарные
let message2 = "hello '"+ personName + "'"// и делать одни и теже по коду
let message3 = 'hello \\  \''+ personName + '\'' // как сделать просто ковычки поставить флеш
console.log(message)
console.log(message2)
console.log(message3)

let newMessage = 'Hello Word'

console.log(newMessage.length) // длинна строки
console.log(newMessage.toUpperCase())// верхний регистор
console.log(newMessage.toLowerCase ()) // нижний регистор
console.log(newMessage.charAt(1))// показывает элемент отсчет с 0
console.log(newMessage.indexOf('Word'))// поиск совподений по буквам , показвает номер где оно начиначется
console.log(newMessage.indexOf('Case')) // если нет совпадения, вернет -1
console.log(newMessage.substr(1, 4)) // ЗАБИРАЕТ подсткроку у страки начинае с определенного симвала и далее количество симфолов
console.log(newMessage.substr((newMessage.indexOf('Word')),5))
console.log(newMessage.substring(1 ,3))  //заберает  значение символов от 1 до 3го