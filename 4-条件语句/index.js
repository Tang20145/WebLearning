console.log("=========条件语句==========");
var l_iTen = 10;
var l_strTen = "10";
if(10 == l_strTen)
{
    console.log("== 不考虑类型");
}
if(10 === l_iTen)
{
    console.log("=== 考虑类型");
}

console.log("三目运算符 和 C++ 一样");

console.log("For 循环:");
var l_arrNums = [1,2,3];
for(var l_iNum of l_arrNums)
{
    console.log(l_iNum);
}