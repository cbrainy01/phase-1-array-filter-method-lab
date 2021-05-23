//const { objectContaining } = require("expect");

// Code your solution here
function findMatching(arrayOfDrivers, name) {
    const newArray = arrayOfDrivers.filter(  (arrayOfDrivers) => {  if(arrayOfDrivers.toLowerCase() === name.toLowerCase()) {
        return name;
    }
    } );
    return newArray;
}

function fuzzyMatch(arrayOfDrivers, name) {
const newArray2 = arrayOfDrivers.filter(   (arrayOfDrivers) => {if(arrayOfDrivers[0] === name[0]) {
return name;
}}  );
return newArray2;
}


function matchName(arrayOfDrivers, id) {

   const newArray = arrayOfDrivers.filter(   function(ele) {return ele.name === id;}   )
    return (newArray);

//   console.log(arrayOfDrivers.filter(      (arrayOfDrivers) =>   {}     )
//   )

}


// function matchName(arrayOfDrivers, name) {
// const defined = fuzzyMatch(arrayOfDrivers, name);
//     }
    //bigArray.push(newArray);