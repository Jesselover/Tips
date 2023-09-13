/* JSON安全的对象 */
const someObj = {
  name: Jesse,
  sex: man,
};
const newObj1 = JSON.parse(JSON.stringify(someObj));

/* 浅拷贝 */
var newObj2 = Object.assign({}, myObject);

newObj2.a; // 2
newObj2.b === anotherObject; // true
newObj2.c === anotherArray; // true
newObj2.d === anotherFunction;
