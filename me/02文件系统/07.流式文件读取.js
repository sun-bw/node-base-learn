/* 
流式文件读取也适用于大文件
*/
var fs = require('fs')
// 创建一个可读流
var rs = fs.createReadStream('hello.txt');

// 创建一个可写流
var ws =  fs.createWriteStream('hello6.txt')

// 监听开启关闭
rs.once('open',()=> {
    console.log('打开了')
})
rs.once('close',()=> {
    console.log('关闭了')
    // 数据读取完毕，关闭可写流
    ws.end()
})

// 如果要读取可读流中数据，必须绑定data事件，data时间绑定完毕，自动开始读取
rs.on('data',(data) => {
    console.log(data)
    // 将读取到的数据写入到可写流中
    ws.write(data);
})