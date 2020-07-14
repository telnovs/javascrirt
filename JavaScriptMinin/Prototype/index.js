//создаем обьект
const person = {
    // создаем поля у обьекта
    name: 'Mark',
    age: 3,
    //создаем функцию
    greet : function (){
        console.log(' Greet !!!')
    }
}
// создаем функцию seyHello у Object.prototype
// она теперь будет работать у любого обькта
Object.prototype.seyHello = function (){
    console.log('Hello!!!!')
}

// создадим  новый обьект с помощью метода creat() у обькта Object
// можем передать в метод creat() обьект,
// который будет являться прототипом для обьекта виктор
const victor = Object.create(person)
// устанавливаем поле name для обьетка victor
victor.name = 'Victor'

// ооздание нового обьекта через глабалный класс String
const str = new String('i am string')