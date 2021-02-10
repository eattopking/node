// buffer可以存储字符串数据， 但是主要用于存储二进制数据，正常的字符串数据是存在v8的堆中的
// buffer 就是node环境中用于存储数据的， 它存储数据分配的内存是在c++ 的堆中
// 数据传输， 比如网络http请求数据传输， 最后都是转换为二进制传输， 所以相应的结果直接是二进制最快， 因为不用在转换了
// buffer 给32位操作系统最多分配1g内存， 给64位系统最多分配2g内存
// buffer的内存分配有 8k机制，大于8k的数据，分配大内存， 其他的分配小内存，
// 小内存分配的规则： 大于4k直接分配对应内存，小于4k,判断当前分配池里面够不够这个内存， 如果够就分配，不够就重新申请8k，放这个数据， 剩余的内存闲置，放到分配池中， 看看有没有其他合适的内存用于分配
// 大内存分配规则： 直接分配一个基础单元， 就是slowBuffer对象， slowBuffer对象是通过node底层的c++定义的

const buf1 = Buffer.alloc(6);
const buf2 = Buffer.allocUnsafe(6);

console.log('buf1', buf1, 'buf2', buf2);

// buf1 <Buffer 00 00 00 00 00 00>  经过初始化每个内存都是00
// buf2 <Buffer f9 02 f2 11 80 0e>  未经过初始化每个内存都是随便拿来的, 性能更好， 但是不安全

// 创建buffer的第三种方式
const buf3 = Buffer.from('6');
const buf4 = Buffer.from(['6']);
const buf5 = Buffer.from(buf1);
console.log('buf3', buf3, 'buf4', buf4, 'buf5', buf5);

// buf3 <Buffer 36>
// buf4 <Buffer 06>
// buf5 <Buffer 00 00 00 00 00 00> Buffer.from的参数是buffer的时候， 这个时候新的buffer会深拷贝这个buffer，因为buffer是引用类型