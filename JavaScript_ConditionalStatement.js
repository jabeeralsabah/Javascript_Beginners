//Conditional Statement
function Grade(Avgmarks){
    if(Avgmarks<=35)
    {
        console.log("Result is failed");
    }
    else if(Avgmarks>35 && Avgmarks<=65)
    {
        console.log("Result is 2 nd class");
    }
    else if(Avgmarks>65 && Avgmarks<=75)
    {
        console.log("Result is First class");
    }
    else
    {
        console.log("Result is destination");
    }
}

var m1 = 50;
var m2 = 90;
var m3 = 90;
var totmarks = m1+m2+m3;
var avgmarks = totmarks/3;
console.log(Grade(avgmarks));