
//Control statements - for, foreach, while, doWhile
console.log("// for loop")
var arr = ["AlSabah", 12,'a'];
for(var i=0;i<arr.length;i++)
{
console.log(arr[i]);
}


console.log("// foreach loop")
arr.forEach(function(element){
console.log(element)
});

console.log("// while loop")
var i =0;
while(i<arr.length)
{
    console.log(arr[i])
    i++;
}

console.log("// do while loop")
var j=0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);