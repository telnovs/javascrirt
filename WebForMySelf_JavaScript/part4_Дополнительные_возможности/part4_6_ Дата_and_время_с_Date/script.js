let date = new Date()

console.log(date) // текущие время
console.log(date.getSeconds())
console.log(date.getDay())// день недели
console.log(date.getMonth())//текущий месяц
console.log(date.setDate(19))//установка даты
console.log(date.getUTCDate())
let date2 = new Date(3600 * 24 * 1000)
console.log(date2)
// 3600 секунд 24 часа 1000 милисекунд =день  8009 это дней
let date3 = new Date(3600 * 24 * 1000 * 8009)
console.log(date3)