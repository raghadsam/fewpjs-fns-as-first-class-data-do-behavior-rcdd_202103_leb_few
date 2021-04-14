/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(TimeString){
let TimeSplit=[];
let array=[];
array=TimeString.split(":");
for (let i = 0; i < array.length; i++) {
  array2.push(parseInt(array[i]));
}
if(array2[0]<12)
  return "Good morning";
}
/* Write your implementation of displayMessage() */
