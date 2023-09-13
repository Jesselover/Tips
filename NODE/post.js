/**
 * http模块：为nodejs
 */
var http = require("http");
var fs = require("fs");

var app = http.createServer((req, res) => {
  console.log(req.url);
  const data = fs.readFileSync("../static/html/form.html");
  res.write(data.toString());
  res.end();
});
app.listen(3000, () => {
  console.log("服务器启动成功，3000端口监听中...");
});
