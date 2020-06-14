// СОЗДАНИЕ ОБЕЬКТА ЧЕРЕЗ глобальный обьект object и метод  create
// метод  create принимает 2 парметра
// 1 параметр отвечает за прототип данного обькта
// 2 параметр отвечает за свойства данного обьекта
const nissan = Object.create({
//создаем свойство с помощью метода Object:
    calculateDistancePerYear :function() {
        // помощью метода defineProperty создаем новое свойсво текущего обьетка this и название
        Object.defineProperty(this, 'distancePerYear', {
            value: Math.ceil(this.distance / this.age),
            enumerable: false,
            writable: false,
            configurable: false
        })
    }
},{
    name : {    // создаем значение поле через обьект с присваением значения через ключ value
        // Существует дескриптор свойств (о них – в официальной документации). Одно мы уже использовали – value.
      //  При перечислении свойств, если мы хотим их использовать, нужно ставить в дескрипторе enumerable: true.
     //В консоли свойство под светится ярким цветом.
        // Configurable отвечает за удаление, writable – за возможность изменять значения свойства.

        value: 'Nissan',
        enumerable: true,
        writable: false,
        configurable: false
    },
    modal :{
        value:'GTR',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year : {
        value:'2015',
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance : {
        value: '93 002',
        enumerable: true,
        writable: true,
        configurable: false
    },
    // Для установления и получения свойства мы используем дескрипторы (get и set.)
    // Когда мы будем обращаться к полю, геттер будет нам что-то возвращать.
    age: {
        enumerable: true,
        //создаем вмести с обектоим и сразу вычиляеться
        get : function() {
            console.log('Получаем возраст')
            return new Date().getFullYear() - this.year
        },
        //Это значение можем установит, присвоев ему любое значание
        set: function() {
            console.log('Устанавливаем значение')
        }
    }
})
console.log(nissan)
nissan.calculateDistancePerYear()
//Пробежаться по всем ключам можно с помощью for
// for (var key in ford) {
//     console.log(key)
// }

for (let key in nissan) {
    if (nissan.hasOwnProperty(key)) {
        console.log(key, nissan[key])
    }
}