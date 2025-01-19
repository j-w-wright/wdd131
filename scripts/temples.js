//hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});


let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;