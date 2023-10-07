// itgid.info - курс Node.js

// Скопируйте файл equal_object.js из таск 14 в данную папку.
// Скопируйте решение из task 13 в файл equal_array.js и реализуйте как анонимный модуль.
// файл index.js должен реализовывать експорт модулей из файлов equal_object.js и equal_array.js под именами eqObject, eqArray. Реализовать в виде объекта.

const eqObject = require ('./equal_object');
const eqArray = require ('./equal_array');
module.exports = {
    eqObject : eqObject,
    eqArray : eqArray
}