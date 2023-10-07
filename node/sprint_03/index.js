const t01 = require('./task_01');
const t02 = require('./task_02');
const t03 = require('./task_03');
const t04 = require('./task_04');
const t05 = require('./task_05');
const t07 = require('./task_07');
const t10 = require('./task_10');

console.log(t03('d_01/d_02')); // пример вызова модуля из таска 3
console.log(t04('d_01/d_02/one.txt')); // пример вызова модуля из таска 4
console.log(t05('d_01/d_02/one.txt')); // пример вызова модуля из таска 5

console.log(t10('d_01/d_02'));
////////////////////////////////////////
console.log(t01());
console.log(t02('sprint_03'));
