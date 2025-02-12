const temples = [
    {       
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Toronto Ontario",
        location: "Brampton, Ontario, Canada",
        dedicated: "1990, August, 25",
        area: 57982,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-854102-wallpaper.jpg"
    },
    {
        templeName: "Raleigh North Carolina",
        location: "Apex, North Carolina, United States",
        dedicated: "1999, December, 18",
        area: 12864,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/raleigh-north-carolina/400x250/4-8f8024ae3a9677809efd47b4807aa6179dc620ac.jpeg"
    },
    {
        templeName: "London England",
        location: "Newchapel, Surrey, England",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-784251-wallpaper.jpg"
    },
    {
        templeName: "Montreal Quebec",
        location: "Longueuil, Quebec, Canada",
        dedicated: "2000, June, 4",
        area: 11550,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montreal-quebec/400x250/montreal-quebec-temple-lds-852836-wallpaper.jpg"
    },
    {
        templeName: "Houston Texas",
        location: "Klein, Texas, United States",
        dedicated: "2000, August, 26",
        area: 33970,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/400x250/houston-temple02.jpg"
    },
];

//populate each temple card with information
/*createTempleCard();

function createTempleCard() {
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}  Temple`);
        img.setAttribute("loading", "lazy");
        img.style.width = "90%";
        img.style.height = "70%";


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-grid").appendChild(card);
    })
}*/

//filtering of temple cards
createTempleCard(temples);

const homeTemplesLink = document.querySelector("#home");
const oldTemplesLink = document.querySelector("#old");
const newTemplesLink = document.querySelector("#new");
const largeTemplesLink = document.querySelector("#large");
const smallTemplesLink = document.querySelector("#small");

homeTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple));
    document.querySelector(".filter-title").innerHTML = "Home";
});

oldTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.includes("188")));
    document.querySelector(".filter-title").innerHTML = "Old";
});

newTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.includes("20")));
    document.querySelector(".filter-title").innerHTML = "New";
});

largeTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 89999));
    document.querySelector(".filter-title").innerHTML = "Large";
});

smallTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10001));
    document.querySelector(".filter-title").innerHTML = "Small";
});

function createTempleCard(filteredTemples) {
    document.querySelector(".temple-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}  Temple`);
        img.setAttribute("loading", "lazy");
        img.style.width = "90%";
        img.style.height = "70%";


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-grid").appendChild(card);
    })
}


//hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});

//footer information
let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;