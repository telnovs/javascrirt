//создаем функцию и обращаемся к ключивому слову this
//при простом вызове функции printObject параметр this бедет относиться к обьекту Window
function printObject(objName){
    console.log('Printing: ', objName)
// делаем итерацию обькта c помощью for in на наличие ключей
    for (let key in this){
        if(this.hasOwnProperty(key)){
            console.log('[' + key + ']', this[key])
        }
    }
}
// создаем обьект
let person = {
    firstName:'Mark',
    age : 26,
    job : 'Backend',
    freinds: ['Elena','Igor']
}

let car = {
    name: 'Ford',
    model: 'Focus',
    year: 2007
}
// с помощью методов bind, coll and apply

// методов bind возвращает новую функцию с контекстом
 let pritnPerson = printObject.bind(person)
pritnPerson('Person')

// call  сразу вызывает функцию, необходимо сразу передовать все парметры
// первый параметр передаеться обьект(контекст)
 printObject.call(car, 'Car')


//первый параметр передаеться обьект(контекст)
// остальные паремтры передаются в массиве
printObject.apply(person, ['Person '])