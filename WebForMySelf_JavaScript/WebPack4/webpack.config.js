const path = require('path') /* используем встроенный модуль node js который работает с путями */

/* Подключаем html-webpack-plugin*/
const HTMLPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',  /*входной файл*/
    output: { /*выходной фаил из webpack*/
        filename: 'bundle.js', /* название файла , обычно bundle.js*/
        path: path.resolve(__dirname, 'dist')/* указываем путь */
    },
    /* Подключаем плаген путем создание массива */
    plugins:[
        /* Плагин подключется путом создание нового класса плагина */
        new HTMLPlugin({
            filename: 'index.html',
            /* берем за основу html файл для обработки этого файла*/
            template: './src/index.html'
        })
    ],
    /* подключаем css loader*/
    module: {
        rules:[
            {   /* говорим что ко всем файлам css применять css-loader */
                test:/\.css$/,
                use:[ 'style-loader','css-loader']
            }
        ]
    }
}