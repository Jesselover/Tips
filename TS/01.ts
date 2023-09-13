let a: number;
let b: string;

let c = true;
// ! 如果变量声明、赋值同时进行，ts会自动判断类型
/**
 * ! js中函数不考虑参数类型、个数
 * ! ts可对此做限制
 */

function sum(a: number, b: number): number {
  return a + b;
}
