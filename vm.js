// vm 模块 类似于eval的作用， 只是更高级的是可以指定执行时的上下文， 可以获取到api， 可以获取到类，然后类实例化后在获取api

const vm = require('vm');

// 在新的上下文执行代码， 指定的上下文必须是对象
const sandbox = {a: 1};

const result = vm.runInNewContext('b = 1; c = 6; f = b < c', sandbox);

console.log('result', result);
console.log('sandbox', sandbox);

// 在上下文中执行， 这个参数是一个上下文， 所有需要将对象先转化为上下文
// const sandbox = {a: 1};
// vm.createContext(sandbox);

// const result = vm.runInContext('c = 1', sandbox);

// console.log('result', result);
// console.log('sandbox', sandbox);

 // 在当前这个上下文执行, 也可说是在global这个上下文中执行， 就是指对全局对象global上属性进行操作， 和作用域无关， 就在global这个上下文中操作
// function aa () {

//     const result = vm.runInThisContext('a = 4');

//     console.log('a', global.a, result);
// }

// let b = {aa};

// b.aa();
