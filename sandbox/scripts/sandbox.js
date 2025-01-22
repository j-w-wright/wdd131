/*
const apples = 5;
const oranges = 3;
let total = apples + oranges;
console.log("total:", total);

const myApples = 4;
const friendApples = 2;
let total = myApples + friendApples;

document.getElementById("myAppleElement").textContent = myApples;
document.getElementById("friendAppleElement").textContent = friendApples;
document.getElementById("totalApplesElement").textContent = total;*/




/* Basic DOM Manipulation Activity
const link = document.querySelector("a");  /* select an element from the HTML file
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride."
sect.appendChild(para);

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org"; */



let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}