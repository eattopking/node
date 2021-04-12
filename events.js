/**
 * events 事件模块, 就是提供EventEmitter类的, 这个类就是创建事件的被观察者实例的
 * const event = require('events'), 还有 const { EventEmitter } = require('events')获取到得都是一样的
 * EventEmitter类， 就是EventEmitter类的EventEmitter属性还是EventEmitter类自己
 *
 * emitter(被观察者实例) 主要的使用的api，就是下面这些，还有其他的api可以在去了解，events模块已经理解了， 就是完全按照观察者模式实现的
 *
 */

const EventEmitter = require('events');

// 创建一个被观察者实例
const emitter = new EventEmitter();

// 注册事件的两种方式
function listener (a, b) {
    console.log(1122333, a, b);
}

// 注册只执行一次事件的回调
function onListener (a, b) {
    console.log(1122333, a, b);
}

// 只执行一次立即移除的事件注册的回调， 相当于调用了一次off('one', onListener)
emitter.once('one', onListener);
emitter.once('one', onListener);
// 触发事件就是emit, emit还可以继续添加参数， 这些参数都会传给事件的回调
emitter.emit('one', 'a', 'b');

// 注册事件on和addListener是一样的
// emitter.on('show', listener);
// emitter.addListener('show', listener);
// 移除事件off和removeListener 是一样的
// emitter.off('show', listener)
// emitter.removeListener('show', listener);
// 触发事件就是emit, emit还可以继续添加参数， 这些参数都会传给事件的回调
// emitter.emit('show', 'a', 'b');


