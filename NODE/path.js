var path = require("path");
// var {join} = require('path')
//! 路径相关
console.log(path.normalize("a/b/c///d\\e"), "normalize"); //a\b\c\d\e normalize
console.log(path.join("a", "b", "../c/d"), "join"); //a\c\d join
console.log(path.resolve("a/b/c"), "resolve"); //F:\UNIAPP\Tips\NODE\a\b\c resolve
console.log(path.isAbsolute("a/b/c"), "isAbsolute"); //false isAbsolute
console.log(path.isAbsolute("/a/b/c"), "isAbsolute"); //true isAbsolute

//! 文件相关
console.log(path.basename("../Blob/blob01.html"), "basename"); //blob01.html basename
console.log(path.extname("../Blob/blob01.html"), "extname"); //.html extname
console.log(path.dirname("../Blob/blob01.html"), "dirname"); //../Blob dirname

//! 路径解析
console.log(path.parse("../Blob/blob01.html"), "parse");
/**
 * {
			root: '', //根目录
			dir: '../Blob', //dirname
			base: 'blob01.html', //basename
			ext: '.html',
			name: 'blob01'
		} parse
 */

var path01 = {
  root: "/", //根目录
  dir: "../Blob", //dirname
  base: "blob01.html", //basename
  ext: ".html",
  name: "blob01",
};
console.log(path.format(path01), "format"); //../Blob\blob01.html format
