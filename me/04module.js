a = 10;
// 在node中有一个全局对象，global，
/* 
和网页的window相似
在全局创建的变量都会作global属性保存
在全局创建的函数都会作global方法保存
*/
/* 
当node在执行模块中的代码时，会在代码最顶部，添加如下代码
function (exports, require, module, __filename, __dirname) {
会在最低部，添加
}

实际上模块中的代码都是包装在一个函数中执行的，函数执行，传递了五个实参
exports
    该对象用来将属性变量或者函数，暴露到外部
require
    函数，用来引入外部的模块
module 
    代表当前模块本身
    exports就是module的属性
__filename
    C:\Users\admin\Desktop\learnNode\me\04module.js
    当前文件的完整路径
__dirname
    当期文件的文件夹
*/
// console.log(arguments.callee + "")
// console.log(exports)
// console.log(module)
// console.log(global.a)
// console.log(__filename)