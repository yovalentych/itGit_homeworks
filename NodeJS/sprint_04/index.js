// Task 01
const task_01 = require('./task_01');
console.log(task_01('./d_04/noks.txt'));

// Task 02
const task_02 = require('./task_02');
console.log(task_02('./d_04/tost.txt'));

// Task 03
const task_03 = require('./task_03');
console.log(task_03('./d_04/words.txt'));

// Task 04
const task_04 = require('./task_04');
console.log(task_04('./d_04/code.dat'));

// Task 05
const task_05 = require('./task_05');
console.log(task_05('./d_04/dubl.txt'));

// Task 06
const task_06 = require('./task_06');
task_06('this is\r\ntask 6');

// Task 07
const task_07 = require('./task_07');
task_07('primavera');

// Task 08
const task_08 = require('./task_08');

const arr_08 = ['The Sims', 'Diablo 2', 'Baldurs Gate 2'];

task_08(arr_08);

// Task 09
const task_09 = require('./task_09');

const arr_09 = [
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
];
task_09(arr_09);

// Task 10
const task_10 = require('./task_10');
task_10('./d_04/f_01.txt', './d_04/f_02.txt');
