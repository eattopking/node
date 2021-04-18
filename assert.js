// assert提供比较、获取错误、 抛出错误、获取promise的错误的api的核心模块
// assert 验证失败时候就是抛出AssertionError 错误
// 现在就是使用严格模式的比较， 严格比较，不严格的比较已经被抛弃了
// 在node 的核心模块的文档中 核心模块点啥的就是require核心模块后点啥
const assert = require('assert').strict;


// assert 就是assert.ok的简写， 就是判断值是不是真值， 不是真值就抛出错误， 错误信息就是不想等。
assert(null, '不想等');
assert.ok(null, '不想等11');

// assert.strictEqual 比较两个值是不是严格相等， 不想等就是抛错， 错误信息是不想等
assert.strictEqual({a:1}, {a:1}, '不想等');

// assert.deepStrictEqual 比较两个值的深度严格相等， 对象情况下，对象的内存指向相同，并且内部的属性值相同，属性值为对象时， 这个对象和内存指向和属相也要相等，嵌套多层依次要相等，不相等就是抛错， 错误信息是不想等

assert.strictEqual('1', 1, '不想等');

// assert.fail 抛出错误，错误信息是错误，默认是AssertionError， 如果错误信息直接传入自定义error， 那就抛出自定义error的
// 错误信息
assert.fail('错误');

// assert.ifError 判断是否是 null 或者 undefined ,不是null 和undefined 就直接抛错， 错误信息就是我们要验证的值

assert.ifError('11111');



