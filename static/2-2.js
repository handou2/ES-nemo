//新的声明方式：const->常量
// 不属于顶层对象window
// 不允许重复声明
// 不存在变量提升
// 暂时性死区：先定义再使用
// 块级作用域
Object.defineProperty(window, "PI", {
  value: 3.14,
  writable: false,
});
const obj = {
  name: "nemo",
  age: 32,
};
Object.freeze(obj); //只能冻结最外层
console.log(obj);
obj.school = "imooc";
console.log(obj);
console.log(first);
