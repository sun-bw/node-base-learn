/* 
同步，异步，简单文件写入，都不适合大文件，性能较差，容易导致内存溢出
*/
var fs = require('fs')
// 流式文件写入
// 创建一个可写流
/*
fs.createWriteStream(path[, options]) 
    -创建一个可写流
    -path:文件路径
    -options:配置参数，可省略
*/
var ws = fs.createWriteStream('hello4.txt');
// 可以通过监听open和close事件，监听流的打开和关闭
ws.once('open',()=> {
    console.log('流打开了')
})
ws.once('close',()=> {
    console.log('流关闭了')
})
// 通过ws向文件输出内容
ws.write('通过可写流，写入的内容');
ws.write('ahahahahh');
ws.write('123123123123');
ws.write('nishishusiha');
ws.write('nishishusiha123123123123');

// 关闭流
ws.end();