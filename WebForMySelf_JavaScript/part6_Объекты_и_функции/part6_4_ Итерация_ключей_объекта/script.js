//создаем обьект
let person = {
    name: 'Mark',
    age: 34 ,
    jod : 'works'
}

// два способа для пролучения доступа к лючам обьекта

// первый способ через  for in
 for( let key in person){
     // проверка  только на ствои методы с обьекте
     if (person.hasOwnProperty(key))
     console.log(person[key])
 }

 // Второй способ через создание обьекта и метода keys
//keys только по ключам обьетка и не затрагивает prototype
//
Object.keys(person).forEach(function(key){
  console.log(person[key])
})