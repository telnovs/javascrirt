// подключаем request-promise
const requestPromise = require('request-promise')

// создаем ассинхронную функцию и экспортируем ее с помощью module.exports
module.exports = async function( city= '' ) {
    if (!city){
        // создаем ошибку если не ввели название города
        throw new Error( 'Ввидете город')
    }

    const KEY = '68c7ceef5d69db54f7fdccb4943162b6'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'
    //создаем обьект для работы с погодой
    // он работает через request-promise
    const options = {
        uri,
        qs: {
            appid : KEY,
            q : city,
            units: 'imperial'
        },
        json: true
    }
    //обработчик ошибок
    try {
        //делаем запрос
        const data= await requestPromise(options)
        //переводим кельвин в цельсия
        const celsius =  (data.main.temp - 32) * 5/9

        return{
            //data.name азвание города и темпрература
            weather: `${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    }catch(error){
        console.log(error)
        // при ошибке возващаем сообшение об ошибке
        return{
            weather: null,
            error: error.error.message
        }
    }

}