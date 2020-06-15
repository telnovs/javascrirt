//создаем обьект
let person = {
    name: 'Mark',
    age: 34 ,
    jod : 'works',
    displayInfo : function(ms){

        //выводим информацию спустя время с помощью метода  setTimeout
        // для корретного ввывода нужен метод bind с параметром this, который указывает на текущий обьект
        setTimeout(function() {
            // Для обычной функции внутри функции объектом this будет глобальный объект Window:
            console.log('name:', this.name)
            console.log('age:', this.age)
            console.log('job:', this.job)
        }.bind(this),ms)
    }
}
//  это второй способ из трех для корректного вывода контекста

// displayInfo : function(ms){
//  можно создать еще переменную с контекстом текущего обьетка, тем самым мы сделаем область видимости
//      let self = this
//     setTimeout(function() {
//         console.log('name:', self.name)
//         console.log('age:', self.age)
//         console.log('job:', self.job)
//     },ms)
// }

person.displayInfo(5000)