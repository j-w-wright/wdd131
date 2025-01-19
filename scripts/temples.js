const date = new Date();
const currentYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;