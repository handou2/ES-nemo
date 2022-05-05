// ES5 中数组遍历的方式
// for循环
// forEach():没有返回值,只是针对每个元素调用func
// Map():返回新的Array,每个元素为调用func的结果
// filter():返回符合func条件的元素数组
// some():返回boolean，判断是否有元素是否符合func条件
//every():返回boolean，判断每个元素是否符合func条件
//reduce():接收一个函数作为累加器
//for in

let arr = [1, 2, 3, 2, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// //forEach():无法跳出循环
// arr.forEach(function (elem, index, array) {
//   console.log(elem, index);
// });
// let res = arr.map(function (value) {
//   value += 1;
//   return value;
//   //   console.log(value);
// });
// console.log(arr, res);

//filter
// let res = arr.filter(function (value) {
//   return value == 2;
// });
// console.log(arr, res);

//some
// let res = arr.some(function (value) {
//   //   console.log(value);
//   return value == 4;
// });
// console.log(arr, res);

//reduce
// let sum = arr.reduce(function (prev, cur, index, array) {
//   return prev + cur;
// }, 0);
// console.log(sum, arr);
//reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（上一次回调的返回值），当前元素值，当前索引，原数组
// let max = arr.reduce(function (prev, cur, index, array) {
//   return Math.max(prev + cur);
// }, 0);
// console.log(max);
// let res = arr.reduce(function (prev, cur) {
//   prev.indexOf(cur) == -1 && prev.push(cur);
// }, []);
// console.log(res);
// every:every() 返回boolean，判断每个元素都符合func条件
// let arr1 = [4, 2];

// let res = arr1.every(function (value) {
//   return value == 4;
// });
// console.log(arr1, res);

// for...of 遍历的是一切可遍历的元素（数组、对象、集合）等
for (let item of arr) {
  console.log(item);
}
for (let item of arr.keys()) {
  console.log(item);
}
for (let [index, item] of arr.entries()) {
  console.log(index, item);
}
