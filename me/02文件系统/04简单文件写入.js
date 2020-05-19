/* 
简单文件写入
    fs.writeFile(file, data[, options], callback)
    fs.writeFileSync(file, data[, options])
        -file:操作文件的路径
        -data:要写入的数据
        -options：选项，可以对写入进行设置，可选参数
        -callback：回调函数，写入完成执行的参数
        flag:a:追加写，w：清空写，r：只读
*/
var fs = require('fs')
fs.writeFile('hello3.tet','通过writefile写入',{flag:'w'},(err) => {
    if(!err){
        console.log('写入成功！')
    }
})