//var
// ES-6
//新的声明方式：let->变量
// 不属于顶层对象window
// 不允许重复声明
// 不存在变量提升
// 暂时性死区：先定义再使用
// 块级作用域
// function foo(a = b, b = 2) {
//   console.log(a, b);
// }
// foo();
//Uncaught ReferenceError: Cannot access 'b' before initialization
// function foo(a = 2, b = a) {
//   console.log(a, b);
// }
// foo();
// for (let i = 0; i < 3; i++) {
//   console.log("循环内" + i);
// }
// console.log("循环外" + i);

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); //0 1 2
    });
  })(i);
}
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); //0 1 2
  });
}
