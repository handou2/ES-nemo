//数组的扩展
// 类数组 / 伪数组;
// Array.from();
// Array.of();
// copyWithin();
// fill();
// includes();

// xx instanceof Array //判断是否是数组
// 将伪数组转化成真正的数组
// let div = document.querySelectorAll(".xx");
// console.log(div instanceof Array);
// let arr = Array.prototype.slice.call(div);
// console.log(arr);
// arr.push(123);
// console.log(arr);

// function foo() {
//   console.log(arguments);
//   console.log(arguments instanceof Array);
// }
// foo(1, "ioom", true);

// let arrayLike = {
//   0: "es6",
//   1: "es7",
//   2: "es8",
//   length: 3,
// };

// let arr = Array.from(arrayLike);
// arr.push("es9");
// console.log(arr);

// let arr = new Array(1, 2);
//构造数组
// let arr = Array.of(3);
// console.log(arr);

// let arr = Array.of(3, true, "imm", [1, 2, 3]);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.copyWithin(1, 3)); //[1,4,5,4,5] 第一个参数为将替换元素下标，第二个为拿来替换的元素下标

// let arr = [1, 2, 3, 4, 5];
// arr.fill("imooc", 1, 3);
// //这个操作是将 array 数组的第二个元素（索引为1）到第三个元素（索引为2）内的数填充为 0，不包括第三个元素，所以结果是 [1, 0, 3, 4]
// console.log(arr); //[1, 'imooc', 'imooc', 4, 5]

let arr = [1, 2, 3, NaN];
console.log(arr.indexOf(4)); //-1  查看是否包含4
console.log(arr.indexOf(NaN)); //-1  查看是否包含NaN
console.log(arr.includes(NaN)); //true  查看是否包含4
