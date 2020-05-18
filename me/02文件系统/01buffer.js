/* 
Buffer(缓冲区)
    buffer和数组很像，操作发放和数组类似，比传统数组性能好
    数组中不能存储二进制文件，buffer就是用来存储二进制数据文件，
    使用buffer不用引入，直接使用
    在buffer中存储的数据，都是二进制，显示是都是16进制。
    buffer每一个元素的大小，从00到ff，
*/
var str = 'Hello Atguigu，您好';
//将一个字符串保存到buffer中
var buffer = Buffer.from(str)//占用内存的大小
console.log(buffer)
console.log(str.length)//字符串的长度

// 创建指定大小的buffer
var buffer2 = Buffer.alloc(10);//创建10个字节的buffer
// 通过索引来操作buffer2中的元素
// buffer大小确定，不能再修改，buffer实际上是对底层内存的直接操作
buffer2[0] = 88;
buffer2[1] = 255;
console.log(buffer2)
// 只要数字在控制台输出一定是10进制
// console.log(buffer2[1].toString(16))

/* 
Buffer.from(str) 将一个字符串转换为buffer
Buffer.alloc(size) 创建一个指定大小的buffer
Buffer.allocUnsafe(sizi) 创建一个指定大小的buffer，可能包含敏感数据，性能较好
buufer2.toString 将缓冲区中的数据转换成字符串
*/