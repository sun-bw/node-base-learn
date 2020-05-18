/* 
文件系统（File System）
    同过node操作系统中的文件
    使用文件系统，直接引入，fs是核心模块，不需要下载

同步文件写入
    手动操作的步骤。
        1.打开文件
            fs.openSync(path,flags,mode)
                path:要打开文件的路径
                flags:打开文件要做的操作类型
                    r:只读
                    w：可写的
                mode：设置文件的操作权限，一般不传
            返回值：该方法会返回一个文件的描述符作为结果，我们可以通过描述符对文件进行操作
        2.文件中写入内容
            fs.writeSync(fd, string[, position[, encoding]])
                fd:文件的描述符，需要传递要写入的文件的描述符
                string： 要写入的内容
                position:从什么位置开始写
                encoding：写入的编码，默认utf-8
        3.保存关闭文件
            fs.closeSync(fd)
            fd：要关闭文件的描述符
*/
var fs = require('fs')
// 打开文件
var fd = fs.openSync("hello.txt","w")
// 写入内容
fs.writeSync(fd,'今天天很好！')
// 关闭文件
fs.closeSync(fd);
console.log(fd)