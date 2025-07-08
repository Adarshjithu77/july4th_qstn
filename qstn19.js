function abcd(value){
    return typeof value ==="number" ? Math.sqrt(value) : "not a number";
}
console.log(abcd(7));
console.log(abcd("abhi"));