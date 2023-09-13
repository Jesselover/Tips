/* 数组是特殊的对象 */
var myArray = ["foo", 42, "bar"];
myArray.baz = "baz";
myArray["0"] = 100; // 同myArray[0] = 100效果相同

console.log(myArray.length); // 3
console.log(myArray.baz); // baz
console.log(myArray); // [ 100, 42, 'bar', baz: 'baz' ]
/**
 * arr[3] --> arr["3"] (key值访问属性)
 */
