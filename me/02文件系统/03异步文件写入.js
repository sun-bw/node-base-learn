/* 
异步文件写入
fs.open(path[, flags[, mode]], callback)
    -打开文件
    -异步调用结果都是通过回调函数返回的
    -回调函数两个参数
        -err：错误对象，没有错误，为null
        -fd：文件描述
fs.write(fd, buffer[, offset[, length[, position]]], callback)
    -用来异步写入文件
*/
var  fs = require('fs')
// 打开文件
fs.open('hello2.txt','w',function(err,fd){
    // 判断是佛出错
    if(!err){
        console.log(fd)
        // 没有出错，文件写入
        fs.write(fd,'异步写入的内容',function(err){
            if(!err){
                console.log('写入成功！')
            }
            // 关闭文件
            fs.close(fd,function(err){
                if(!err){
                    console.log('文件关闭')
                }
            });
        })
    }else{
        console.log(err)
    }
})