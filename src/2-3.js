// let [a, b, c] = [1, 2, 3];

// let [a, b, [c]] = [1, 2, [3, 4]];
// console.log(a, b, c); //1 2 3

// let [a, b, c] = [1, 2, [3, 4]];
// console.log(a, b, c); //1 2 [3 4]

// let [a, b, c, d = 5] = [1, 2, [3, 4], 6];
// console.log(a, b, c, d); //1 2 [3 4] 6

// let user = {
//   name: "xiecheng",
//   age: 34,
// };
// // let name = user.name;
// // let age = user.age;
// let { name, age } = user;
// console.log(name, age);

// let str = "imooc";
// let [a, b, c, d, e] = str;
// console.log(a, b, c, d, e);

// function foo({ name, age, school = "imooc" }) {
//   console.log(name, age, school);
// }
// let obj = {
//   name: "nemo",
//   age: 33,
//   //   school: "zhuzhu",
// };
// foo(obj);

//提取json数据
// let json = '{"a":"hello","b":"world"}';
// let { a, b } = JSON.parse(json);
// console.log(a, b);
