/* 
模块化 
common.js   
在node.js中一个js文件就是一个模块

在node中，每一个js文件的代码都是独立运行在一个函数中的，不是全局作用域。
模块之间的函数不能访问
*/
console.log('我是一个模块')

// 向外部暴露属性和方法
/* 
通过exports向外部暴露变量和方法，设置为exports的属性
*/
exports.x = '我是02modules中的x'
var y = 20;