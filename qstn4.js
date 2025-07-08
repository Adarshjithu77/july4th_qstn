function checkproductofthreenumbers(num1,num2,num3){
const sum=(num1*num2*num3);
return sum>100 ? sum : "Too small";
}
console.log(checkproductofthreenumbers(15,3,6))
console.log(checkproductofthreenumbers(6,3,2))