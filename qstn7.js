function typeoflongervalue(val1,val2){
    const string1=String(val1);
    const string2=String(val2);
return string1.length>string2.length ? typeof(val1) : string2.length>string1.length ? typeof(val2) : "Equal length";
}
console.log(typeoflongervalue(1237,"abhi"))
console.log(typeoflongervalue(137977,"abhi"))
console.log(typeoflongervalue("hello","abhi"))