/* 
1.同步文件读取
2.异步文件读取
3.简单文件读取
    fs.readFile(path[, options], callback)
    fs.readFileSync(path[, options])
        -path：要读取文件路径
        -options：读取选项，可省略
        -callback：通过回调函数，返回读取内容(err,data)
            err:错误；
            data：读取对象，buffer
4.流式文件读取
*/
var fs = require('fs')
fs.readFile('hello4.txt',(err,data)=> {
    if(!err){
        console.log(data.toString())
        // 将data写入文件
        fs.writeFile('hello5.txt',data,()=> {
            if(!err){
                console.log('文件写入成功')
            }
        })
    }
})