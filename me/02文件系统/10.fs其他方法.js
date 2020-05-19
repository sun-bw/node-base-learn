var fs = require('fs')
/* 
fs.existsSync(path)
    检查路径是否存在
*/
// var isExists = fs.existsSync('hello.txt')
// console.log(isExists)

/* 
fs.stat(path,callback)
fs.statSync(path)
    获取文件的状态
    返回一个对象，对象保存了当前状态的想关信息
*/
// fs.stat('hello.txt',(err,stat)=>{
//     /* 
//     size文件的大小
//     isFile()是否是一个文件
//     isDirectory()是否是一个文件夹目录
//     */
//     console.log(stat)
// })

/* 
fs.unlink(path,callback)
fs.unlinkSync(path)
    删除文件
*/
// fs.unlinkSync('hello3.tet')

/* 
fs.readdir(path[,options],callback)
fs.readdirSync(path[,options])
    读取一个目录结构
        files是一个字符串的数组，每一个元素就是文件夹或者文件的名字
*/
// fs.readdir('.',(err,files)=> {
//     if(!err){
//         console.log(files)
//     }
// })


/* 
fs.truncate(path,len,callback)
fs.truncateSync(path,len)
    截断文件，将文件修改指定大小的文件
*/
// fs.truncateSync('hello2.txt',2)

/* 
– fs.mkdir(path[, mode], callback) 
– fs.mkdirSync(path[, mode])
    创建目录
*/
// fs.mkdirSync('hello')

/* 
– fs.rmdir(path, callback) 
– fs.rmdirSync(path)
    删除目录
*/
// fs.rmdirSync('hello')


/* 
– fs.rename(oldPath, newPath, callback) 
– fs.renameSync(oldPath, newPath)
    对文件进行重命名
*/
// fs.rename('hello07.txt','asdasdasd.txt',(err)=> {
//     if(!err){
//         console.log('修改成功！')
//     }
// })


/* 
– fs.watchFile(filename[, options], listener)
    监听文件的修改
        filename：监视的文件的名字
        options配置选项
        listener：回调函数，当文件发生变化时，回调函数会执行
            curr当前文件状态
            prev修改前文件的状态
            都是stat对象
*/
fs.watchFile('hello.txt',(curr,prev)=>{
    console.log("文件发生变化")
})