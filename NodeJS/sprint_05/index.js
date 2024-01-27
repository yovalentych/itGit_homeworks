// Для удобства работы вы можете комментировать запуски тех тасок, с которыми не работаете на данный момент.

// Task 01
const task_01 = require('./task_01');
console.log(task_01('./f_05/01.json'));

// Task 02
const task_02 = require('./task_02');
console.log(task_02('./f_05/02.json'));

// Task 03
const task_03 = require('./task_03');
console.log(task_03('./f_05/03.json'));

// Task 04
const task_04 = require('./task_04');
console.log(task_04('./f_05/04.json'));

// Task 05
const task_05 = require('./task_05');
console.log(task_05('./f_05/05.json'));

// Task 06
const task_06 = require('./task_06');
console.log(task_06());

// Task 07
const task_07 = require('./task_07');
task_07();

// Task 08
const task_08 = require('./task_08');
task_08();

// Task 09
const task_09 = require('./task_09');

const obj09 = {
  name: 'Morpheus',
  job: 'Leader',
  id: '199',
  createdAt: '2020-02-20T11:00:28.107Z',
  contactdetails: {
    phone: '8439743294793',
    email: 'test@abc.com',
  },
};

task_09(obj09);

// Task 10
const task_10 = require('./task_10');
// ожидается [12, 55, 9.3]
task_10([12, '34', 'test', 55, '94', 9.3, 'hello']);
