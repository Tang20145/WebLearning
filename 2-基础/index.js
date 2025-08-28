// 声明变量
console.log("---------变量声明-----------");
let l_letVar;
l_letVar = 10;

const l_constVar = 20;

console.log("letVar =",l_letVar,";\nconstVar =",l_constVar,";");

//原生数据类型
// number类型
let l_number1 = 1;
let l_number2 = 1.2;
// string
let l_string ="JcGam1ng";
// boolean
let l_boolean = true;
// null
let l_null = null;
//undefined
let l_undefined1 = undefined;
let l_undefined2;

// 模板字符串
console.log("---------模板字符串-----------");
const l_moduleString = `number1 = ${l_number1} & l_string = ${l_string}`;
console.log(l_moduleString);

console.log("----字符串常用属性、方法------");
console.log(`\"${l_string}\".substring(1,2) = ${l_string.substring(1,3)}`)
console.log(`\"${l_string}\".split('') = ${l_string.split('')}`)

console.log("---------数组--------------");
const l_arrNumbers = new Array(1,2,3,true,"holy string","pop string");
//const 数组可以修改
l_arrNumbers.pop();
l_arrNumbers.push(null);
l_arrNumbers.unshift(undefined);

console.log(l_arrNumbers);
console.log(Array.isArray(l_arrNumbers));
console.log(l_arrNumbers.indexOf(true));