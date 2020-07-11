// подключаем request-promise
const requestPromise = require('request-promise')

// создаем ассинхронную функцию и экспортируем ее с помощью module.exports
module.exports = async function( city= '' ){
    if (!city){
        // создаем ошибку если не ввели название города
        throw new Error( 'Ввидете город')
    }
    console.log('City:',city)
}