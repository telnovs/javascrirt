const obj = {name: 'weakmap'}

//Создаем WeakMap, ключами которого могут являться только обьекты
const map = new WeakMap([
    [obj,'obj data' ]
])
// методы WeakMap - get, set, delete, has -остальных полей и методов как у Map нету
/////////////***********     Пример      ***********////////////

// Создаем WeakMap
const cache = new WeakMap()
// Создаем функцию
function cacheUser(user){
    //делаем проверку находиться ли пользователь в cache
    if(!cache.has(user)){
        // если не находиться то добовляем его
        cache.set(user, Date.now())
    }
    // возращаем введенного обьекта
    return cache.get(user)
}
// Создаем новых обьектов
 let lena = {name: 'Lena'}
 let alex = {name: 'alex'}

 cacheUser(lena)
 cacheUser(alex)
  // если мы присвоем значение null, то автоматически из cache обьект лена удалиться сборщиком мусара
  // память будет очищена и нет ссылкы на данный обьект
// и нам не надо будет дополнительно что то делать с cache
  lena = null

 console.log(cache.has(lena))
 console.log(cache.has(alex))