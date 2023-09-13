/**
 * http模块：为nodejs
 */
var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer((req, res) => {
  console.log(url.parse(req.url), 111); // query 为 string
  console.log(url.parse(req.url, true), 222); // query 为 object
  // html 标签被识别
  const data = fs.readFileSync("../static/html/test01.html");
  res.write(data.toString());
  res.end();
});
app.listen(3000, () => {
  console.log("服务器启动成功，3000端口监听中...");
});
