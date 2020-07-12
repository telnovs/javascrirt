import { config } from './modules/config.js'//передаем обьект config в файл index.js
import AppService from './modules/app.service' // прередаем класс по дефолту в файл index.js
import  './modules/heared.component'// импортируем фиал без эксорта
import './css/index.css'// подключаем css


console.log('Config key:', config.key)

const service = new AppService('service')
service.log()