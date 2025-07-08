function abcd(num){
   let sum=0;
  for(let i=0;i<num.length;i++){
    sum+=num[i];
  }
  return sum+10;
}
console.log(abcd([1,3,5,6]))