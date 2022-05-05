//扩展运算符
// function foo(a, b, c) {
//   console.log(a, b, c);
// }
let arr1 = [1, 2, 3];
let arr2 = [4, 2, 3];
arr1.push(...arr2);
console.log(arr1); //[1, 2, 3, 4, 2, 3]

let str = "imooc";
var arr = [...str];
console.log(arr); //['i', 'm', 'o', 'o', 'c']

// rest 参数
// function foo(x, y, z) {
//   let sum = 0;
//   Array.from(arguments).forEach(function (item) {
//     sum += item;
//   });
//   return sum;
// }
// console.log(foo(1, 2)); //3
// console.log(foo(1, 2, 3)); //6

function foo(...args) {
  let sum = 0;
  args.forEach(function (item) {
    sum += item;
  });
  return sum;
}
console.log(foo(1, 2)); //3
console.log(foo(1, 2, 3)); //6
