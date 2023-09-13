var fs = require("fs");

/* 读取文件 */
// 同步读取
const data1 = fs.readFileSync("../static/txt/01.txt");
console.log("同步读取", data1.toString());

// 异步读取
fs.readFile("../static/txt/01.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("异步读取", data.toString());
});

/* 写入文件 */
// 同步写入
fs.writeFileSync("../static/txt/02.txt", "这是fs.writeFileSync写入内容");
/**
 * 若文件存在，则会覆盖
 * 若文件不存在则会新建
 */

// 异步写入
fs.writeFile("../static/txt/03.txt", "这是fs.writeFile 写入的内容", (err) => {
  if (err) console.log(err);
  console.log("异步写入03.txt");
});
