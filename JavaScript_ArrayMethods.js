console.log("//Array Methods - Push(), Pop(), Shift(), Unshift()");

var arr=[1,5,9,34,'Jabeer',null];
arr.push("Shannu"); //it will push element to the array.
arr.pop(); //it will remove the element from array.
arr.reverse(); //it will reverse elements in array.
arr.shift(); //it will remove element from index 0.
arr.unshift("Rajeev"); // it will add element to index 0.
arr.sort(); //it will sort the elements in array.
arr.splice(0,3); // it will take 2 input(starting index, ending index), with this it will remove all the elements in between the given range.
console.log(arr.toString()); // it will convert array to array string.
console.log(arr);
console.log(arr.toLocaleString());
console.log(arr.indexOf("Rajeev")); //it will return index of the given string.
console.log(arr.concat("Jabeer","kumar")); //it will add given items to the array 
console.log(arr);
