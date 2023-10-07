//  Задания юнита расположены на сайте.

// const goods_1 = new Goods('apple', 23.5);
// console.log(goods_1);

// const goods_1 = new Goods(
//   'apple',
//   23.5,
//   'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png',
//   400
// );
// console.log(goods_1);

const goods_1 = new Goods(
  'apple',
  23.5,
  'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png',
  400
);
console.log(goods_1);
// И теперь выведем на страницу
document.querySelector('.out-3').append(goods_1.draw());
