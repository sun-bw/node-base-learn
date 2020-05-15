// 引入其他模块
/* 
在node中，通过require()函数引入外部模块
require传递文件路径作为参数
如果是相对路径，使用.或者..

使用require引入模块后，该函数会返回一个对象，对象代表引入的模块
*/
/*node模块分为两大类
    核心模块
        有node引擎提供
            核心模块的标识就是模块的名字
    文件模块
        用户自己建的模块
            文件模块标识：文件的路径，一般为相对路径. ..
*/

// md中包含的02中的变量
// 核心模块引入
var fs = require('fs')
var md = require("./02module")
var math = require('./math')
console.log(md)
console.log(math.add(123,234))
console.log(fs)