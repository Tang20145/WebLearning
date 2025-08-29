console.log("=============对象=============");
var l_ObObject = {
    m_strFirstName : String,
    m_strLastName : "Jc",
};

l_ObObject.m_strFirstName = "Gam1ng";
console.log(l_ObObject);
console.log(`${l_ObObject.m_strLastName} ${l_ObObject.m_strFirstName}`);

console.log("从对象中抽值:");
var { m_strFirstName , m_strLastName } = l_ObObject;
console.log(`${m_strLastName} ${m_strFirstName}`);

console.log("添加属性：")
l_ObObject.m_nNewInt = 100;
console.log(l_ObObject);

console.log("=====对象数组和Json========")
var l_arrObjectArray = [
    {
        x : 1,
        y : 2,
    },
    {
        x : 1,
        y : 2,
    },
    {
        x : 1,
        y : 2,
    },
]
console.log(`object Array : \n${l_arrObjectArray}`);
console.log(`json :\n${JSON.stringify(l_arrObjectArray)}`);