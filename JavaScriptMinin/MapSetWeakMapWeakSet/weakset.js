// weakset тоже самое что и weakmap
//ключами   могут быть только обьекты
//если мы присвоем значение null, то автоматически  обьект  удалиться сборщиком мусара
//память будет очищена и нет ссылкы на данный обьект


const users = [
    {name: 'Alena'},
    {name: 'Vasiliy'},
    {name: 'Mark'},
    {name: 'Sergey'}
]

const visits = new WeakSet()

visits.add(users[1]).add(users[3]).add(users[0])

users.splice(1, 1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))
console.log(visits.has(users[3]))