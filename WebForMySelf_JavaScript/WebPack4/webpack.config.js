const path = require('path') /* используем встроенный модуль node js который работает с путями */

/* Подключаем html-webpack-plugin*/
const HTMLPlugin = require('html-webpack-plugin')
/* Подключаем mini-css-extract-plugin*/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* Подключаем optimize-css-assets-webpack-plugin*/
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',  /*входной файл*/
    output: { /*выходной фаил из webpack*/
        filename: 'bundle.js', /* название файла , обычно bundle.js*/
        path: path.resolve(__dirname, 'dist')/* указываем путь */
    },
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin({}),
            // new UglifyJsPlugin({})
        ]
    },
    /* Подключаем плаген путем создание массива */
    plugins:[
        /* Плагин подключется путом создание нового класса плагина */
        new HTMLPlugin({
            filename: 'index.html',
            /* берем за основу html файл для обработки этого файла*/
            template: './src/index.html'
        }),
        /* Подключаем плаген mini-css-extract-plugin */
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    /* подключаем css loader*/
    module: {
        rules:[
            {   /* говорим что ко всем файлам css применять css-loader */
                test:/\.css$/,
                /* Подключаем плаген mini-css-extract-plugin */
                use:[ MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    }
}