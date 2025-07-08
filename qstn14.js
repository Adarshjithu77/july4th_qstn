function seniorcitizenornot(name,age){
    return age>60 ? name+"is a senior citizen" : name + "is" + (age*7) + "in dog years";
}
console.log(seniorcitizenornot("abhi",55));
console.log(seniorcitizenornot("abhi",5));