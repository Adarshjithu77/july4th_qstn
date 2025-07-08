function abcd (num1,num2,str){
    return str==="add" ? num1+num2 :str==="subtract" ? num1-num2 : "Invalid operation";
}
console.log(abcd(5,7,"add"))
console.log(abcd(9,7,"subtract"))
console.log(abcd(5,8,"hii"))