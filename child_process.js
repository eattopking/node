/**
 * child_process 就是node提供可以在终端的子进程中执行指令， 在子进程执行指令主要就是依靠child_process模块提供的 exec 、execFile、
 * fork 、 spawn 完成， 这四个api都是异步api， 还有有的api有对应的同步api, 用这些api可以在js中执行shell中能执行的所有指令
 */

/**
 * 创不创建新shell就是创不创建一个新的shell进程，创建新的shell进程就是会有新的上下文关系， 不会和终端中那个进程使用一个上下文关系了，所在新的进程中执行例如 cd， ls -a
 * 这样的指令显示的结果都是根据新的进程上下文, 而不会显示根据当前终端中进程上下文产生的结果，不通过进程的 pid是不同的, 子进程所对应的目录是和父进程一样的， 上下文不是说进程创建时的所在目录
 */

const {exec, execFile, fork, spawn} = require('child_process');
/**
 * 在当前进程中执行代码的时候又创建的了一个新的进程，这个新进程就叫做当前进程的子进程，子进程和当前的进程就是独立的两个进程
 * 只是根据这个创建的关系， 所以才叫子进程
 */

/**
 * 这个api有回调, 并且默认创建新的shell子进程执行指令, 所有我们第一个参数直接按照shell的格式输入指令就行了， 这个指令
 * 直接就可以在shell中执行并且产生效果, 也是通过通过 设置option shell: false默认创建执行命令的子进程， 不创建shell子进程
 *
 * error 错误  没有错误时是null， 有错误时是对象
 * stdout 标准输出 执行后输出的结果 默认就是字符串
 * stderr 执行后错误的输出的结果 默认就是字符串
 *
 */
// exec('ls -a', (error, stdout, stderr) => {

//     console.log(error, stdout, stderr)
// });

/**
 * fork 就是直接执行node 脚本的api， 第一个参数为node脚本的相对路径， 这个api没有回调, 但是可以返回childProcess实例用于注册事件监听和触发事件， 这个api执行会创建一个新的node子进程
 * 例如 注册 stdout事件
 * 它的option 中没有shell这个参数， 也就是不能创建一个新的shell进程
 */

// fork('./test.js')


/**
 * 这个api有回调， 默认不创建新的shell子进程执行指令，只会创建一个新的子进程去执行我们输入的非shell格式的命令，并且达到和shell执行命令一样的结果
 * 但是execFile 的配置中，可以设置shell: true, 这样就可以创建一个shell子进程了，我们输入的指令就可以是shell格式的了， 用法就可以和exec一样了
 */

// 这里就是shell的语法格式写就行了，分号就是表示执行完前面产生结果之后， 在这结果的基础上在执行后面的指令 例如 'cd ../; ls -a'
 execFile('cd ../; ls -a', {
    shell: true
}, function(error, stdout, stderr){
    // if(error){
    //     throw error;
    // }
    console.log(stdout);
});

// 这些api都是依据spawn和spawnSync实现的