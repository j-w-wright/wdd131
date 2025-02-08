


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

//--------PRODUCT NAMES-------------//  
// Working on figuring this out.


//let productName = document.getElementById("productName");
//let optionName = products.name;

//if (optionName === document.option.value)


//----NUMBER OF VISITS-----//
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit.`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

//--------FOOTER----------//  
let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;