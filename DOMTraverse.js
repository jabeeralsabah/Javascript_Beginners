
var elmtclass = document.getElementsByClassName("container");
elmtclass[0].style.background = "yellow";

var elmtid = document.getElementById("btn");
elmtid.style.background = "pink";
elmtid.style.color = "red";


function clicked(){
    console.log("this is button");
}

var sal = setInterval(clicked,2000)


window.onload = function(){
    console.log("This is loaded");
    }

firstcontainer.addEventListener("click", function(){
    console.log("button clicked");
    clearInterval(sal);
})

firstcontainer.addEventListener("mouseover", function(){
    console.log("mouseover reacted");
})
firstcontainer.addEventListener("mouseout", function(){
    console.log("mouseout reacted");
})
firstcontainer.addEventListener("mouseup", function(){
    console.log("mouseup reacted");
})
firstcontainer.addEventListener("mousedown", function(){
    console.log("mousedown reacted");
})





   