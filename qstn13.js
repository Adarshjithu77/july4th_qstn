function abc(value){
    return typeof value==="boolean" ? !value : value;
}
console.log (abc(true));
console.log(abc(false));
console.log(abc("abhi"));