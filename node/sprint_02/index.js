// тут вы подключаете и тестируете модули. Подключать и отключать можно в любой последовательности.

const task_1 = require('./task_01');
console.log(task_1);

const task_2 = require('./task_02');
console.log(task_2(2, 6));

const task_3 = require('./task_03');
let arr3 = [1, 56, 4, 7, -57, 2, 32, 3, 4, 7, 5, 16];
console.log(task_3(arr3));

const task_4 = require('./task_04');
let str4 = '        This is America      ';
console.log(task_4(str4));

const task_5 = require('./task_05');
console.log(task_5(str4));

const { preparedArray } = require('./task_06');
let arr6 = [
  '        This is America      ',
  '  This is Ukraine    ',
  '   Kurwa Bober, jakie bydleeee      ',
];
console.log(preparedArray(arr6));

const { isWhitespace } = require('./task_07');
console.log(isWhitespace(str4));

const task_8 = require('./task_08'); //HELPPP
let arr8 = [3, '33', '56b']; //ніяк не можу перевести "33" в число(((
console.log(task_8(arr8));

const task_9 = require('./task_09');
let str9 = 'jpg';
console.log(task_9(str9));

const { password } = require('./task_10');
let str10 = '    dsagfdsasacscas    ';
console.log(password(str10));

const task_11 = require('./task_11');
let num11 = 45000;
console.log(task_11(num11));

const { fileSize } = require('./task_12');
console.log(fileSize(num11));

const task_13 = require('./task_13');
let arr13 = [1, 56, 4, 7, -57, 2, 32, 3, 4, 7, 5, 16];
console.log(task_13(arr3, arr13));

// const { eqObject } = require('./task_14');
let obj1 = { name: 'Yovan', age: 27, sex: 'male', isStudetnt: true };
let obj2 = { name: 'Julia', age: 26, sex: 'female', isStudetnt: false };
// console.log(eqObject(obj1, obj2));

const { eqObject, eqArray } = require('./task_15');
console.log(eqObject(obj1, obj2));
console.log(eqArray(arr3, arr13));
