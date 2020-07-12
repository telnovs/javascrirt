const path = require('path') /* используем встроенный модуль node js который работает с путями */

module.exports = {
    entry: './src/index.js',  /*входной файл*/
    output: { /*выходной фаил из webpack*/
        filename: 'bundle.js', /* название файла , обычно bundle.js*/
        path: path.resolve(__dirname, 'dist')/* указываем путь */
    }
}