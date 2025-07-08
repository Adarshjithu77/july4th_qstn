function largest(num1,num2,num3){
    return num1>num2 ? (num1>num3 ? num1:num3) : (num2>num3 ? num2:num3);
}
console.log(largest(5,7,2));
console.log(largest(10,6,17));