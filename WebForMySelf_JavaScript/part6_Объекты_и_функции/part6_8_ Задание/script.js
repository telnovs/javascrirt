//создаем массывы
let a = [1,3,9]
let b = [2,'Hello',5]

//что бы создать общий метод для всех массивов нам необходимо обратьиться к глобаньному классу Array =>
//Array и обратиться к прототипу через свойство prototype для создание нового метода
Array.prototype.double= function(){
 // возвращаем новый массив созданный с помощью метода map
return newArray = this.map(function(item){
    // делаем проверку на типы с помощью метода typeof
    //далее к каждым из типов делаем нужный результат
    if ( typeof item === 'number'){
        return Math.pow(item,2)
    }
    if ( typeof item === 'string'){
        return item += item
    }
})

}
//реализация данного метода
let newA = a.double()
let newB = b.double()

console.log('A',newA)
console.log('B',newB)