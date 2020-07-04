console.log("//Continue")
var arr =[1,3,5,2,9,6];
for(let i=0;i<arr.length;i++)
{
  if(i==2){
continue;
  }
  console.log(arr[i]);
}

console.log("//Break")
for(let i=0;i<arr.length;i++)
{
  if(i==2){
break;
  }
  console.log(arr[i]);
}

