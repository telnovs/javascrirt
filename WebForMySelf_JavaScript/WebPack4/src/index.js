import React from 'react' //подключаем React
import {render} from 'react-dom' // подключаем метод render  для стаота нашего приложения
import App from './App'
import { config } from './modules/config.js'//передаем обьект config в файл index.js
import AppService from './modules/app.service' // прередаем класс по дефолту в файл index.js
// import  './modules/heared.component'// импортируем фиал без эксорта
import './css/index.css' // подключаем css
import './less/index.less' // подключаем less
import './scss/index.scss' // подключаем sass


console.log('Config key:', config.key)

const service = new AppService('service')
service.log()
//вызываем метод  render с  2 параметрами
// 1 параметр заголовок h1
// 2 параметр дом ноду
render( <App />, document.getElementById('app'))
