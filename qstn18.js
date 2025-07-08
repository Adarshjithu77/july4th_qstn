function swapvalues(a,b){
    let temp=a;
    a=b;
    b=temp;
    return {a,b};
}
console.log(swapvalues(7,3));
console.log(swapvalues("apple","orange"));