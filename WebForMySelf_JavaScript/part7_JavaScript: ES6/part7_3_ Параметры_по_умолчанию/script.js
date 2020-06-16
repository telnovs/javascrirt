//создаем функции
// В аргументах можем присваивать дефолтное значение
const creatPost= (title,text = 'Default text',date = new Date().toLocaleDateString()) => {
    return {
        title: title,
        text:text,
        date:date
    }
}
const post = creatPost('hello word')
console.log(post)

// Если ключ и значение в объекте совпадают, оставляем только одно слово.
const creatPost2= (title,text = 'Default text',date = new Date().toLocaleDateString()) => {
    return {title, text, date}
}
const post2 = creatPost2('Good after', 'Hello')
console.log(post2)