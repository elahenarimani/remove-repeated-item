"use strict"
const array = ["ali","elham","reza","sara","ali","sara","elham"];
let box= new Set();
let myArray =[];
function removeRepeated(arr){
arr.forEach(item => box.add(item)
);
box.forEach(item => myArray.push(item)
)
return myArray;
}
 console.log(removeRepeated(array)); 



