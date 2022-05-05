// 函数的参数
// function foo(x, y = "world") {
//   console.log(x, y);
// }
// foo("hello", 0);

// function foo(x, y = 7, z = 42) {
//   console.log(x); //1
//   console.log(y); //7
//   console.log(z); //43
//   return x + y + z;
// }
// console.log(foo(1, undefined, 43)); //51

// function foo(x, y = 7, z = x + y) {
//   return z * 0.5;
// }
// console.log(foo(1, 7)); //4

// function ajax(url, { body = "", method = "GET", headers = {} } = {}) {
//   console.log(method);
// }
// ajax("http://www.imooc.com", {
//   method: "POST",
// });

// function foo(a, b, c = 1) {}
// // foo();
// console.log(foo.length); //2 Function.length 是统计第一个默认参数前面的变量数：

// function foo(y = x) {
//   let x = 2;
//   console.log(y);
// }
// foo(); //Uncaught ReferenceError: x is not defined
function foo(x, y) {
  console.log(this, x, y);
}
foo.bind({ name: "xiye" })(1, 2);

// console.log((function(){}).bind({}),name)
// foo.bind//改变this指向
