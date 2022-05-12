// 箭头函数
// this指向定义时所在的对象,而不是调用时所在的对象
// 不可以当作构造函数
// 不可以使用arguments对象：arguments 是一个对应于传递给函数的参数的类数组对象。

// function sum(x, y) {
//   return x + y;
// }

// let sum = (x, y) => {
//   return x + y;
// };
// console.log(sum(3, 4));
// let name = "xooo";
// let age = 34;
// let s = "school";
// let obj = {
//   name,
//   age,
//   [s]: "imm",
//   study: function () {
//     console.log(this.name + "zhenzaixuexi");
//   },
// };
// obj.study();

// //判断两个值是否严格相等
// console.log(Object.is(2, "2"));

// let x = {
//   a: 2,
//   b: 44,
// };
// let y = {};
// //将x合并到y
// Object.assign(y, x);
// console.log(y);

// //对象的遍历方式
// let obj1 = {
//   name: "xiecheng",
//   age: 34,
//   school: "imooc",
// };
// //Array中演示过，for...in不能够用于遍历Array，for...in的作用是用于遍历对象的。
// for (let key in obj) {
//   console.log(key, obj[key]);
// }
// //Object.keys()用于返回对象所有key组成的数组。
// Object.keys(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });
// //Object.getOwnPropertyNames()用于返回对象所有key组成的数组。
// Object.getOwnPropertyNames(obj).forEach((key) => {
//   console.log(key, obj[key], 1);
// });

// // Reflect.ownKeys()用于返回对象所有key组成的数组。
// Reflect.ownKeys(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });

// let obj = JSON.parse('{"a":"hello","b":"oop"}');
// console.log(obj);
// let str = JSON.stringify(obj);

let checkType = (data) => {
  console.log(typeof "imooc");
};
checkType();
let deepClone = (target) => {};
