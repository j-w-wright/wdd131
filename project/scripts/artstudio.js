const artworks = [
    {       
        name: "Focused", //weasel
        media: "watercolor",
        completed: 1994,
        size: "small", //get the area in inches (height x width)
        image: "images/focused.webp"
    },
    {       
        name: "Chipmunk", 
        media: "watercolor",
        completed: 2004,
        size: "small", 
        image: "images/chipmunk.webp"
    },
    {       
        name: "Ruins",
        media: "watercolor",
        completed: 2021,
        size: "small",
        image: "images/ruins.webp"
    },
    {       
        name: "Harley",
        media: "watercolor",
        completed: 2022,
        size: "small",
        image: "images/harley.webp"
    },
    {       
        name: "Bike Riding",
        media: "watercolor",
        completed: 2016,
        size: "small",
        image: "images/bike_riding.webp"
    },
    {       
        name: "Girl and Christ",
        media: "watercolor",
        completed: 2021,
        size: "large",
        image: "images/girl_and_christ.webp"
    },
    {       
        name: "Timeout",
        media: "pencil",
        completed: 2007,
        size: "small",
        image: "images/timeout.webp"
    },
    {       
        name: "Cabin",
        media: "watercolor",
        completed: 2020,
        size: "small",
        image: "images/cabin.webp"
    },
    {       
        name: "Tea Time",
        media: "watercolor",
        completed: 2006,
        size: "small",
        image: "images/tea_time.webp"
    },
];

//filtering of artwork cards
createArtworkCard(artworks);

const allArtworkLink = document.querySelector("#all");
const paintingsLink = document.querySelector("#painting");
const drawingsLink = document.querySelector("#drawing");
const largeArtworkLink = document.querySelector("#large");
const smallArtworkLink = document.querySelector("#small");
const newArtworkLink = document.querySelector(".new_artwork_grid")

allArtworkLink.addEventListener("click", () => {
    createArtworkCard(artworks.filter(artwork => artwork));
    document.querySelector(".filter-title").innerHTML = "All";
});

paintingsLink.addEventListener("click", () => {
    createArtworkCard(artworks.filter(artwork => artwork.media.includes("watercolor")
    ));
    document.querySelector(".filter-title").innerHTML = "Paintings";
});

drawingsLink.addEventListener("click", () => {
    createArtworkCard(artworks.filter(artwork => artwork.media.includes("pencil")));
    document.querySelector(".filter-title").innerHTML = "Drawings";
});

largeArtworkLink.addEventListener("click", () => {
    createArtworkCard(artworks.filter(artwork => artwork.size.includes("large")));
    document.querySelector(".filter-title").innerHTML = "Large";
});

smallArtworkLink.addEventListener("click", () => {
    createArtworkCard(artworks.filter(artwork => artwork.size.includes("small")));
    document.querySelector(".filter-title").innerHTML = "Small";
});

/*newArtworkLink.addEventListener("click", () => {
    createArtworkCard(artworks.filter(artwork => artwork.completed > 2020))
});*/

function createArtworkCard(filteredArtworks) {
    document.querySelector(".artwork-grid").innerHTML = "";
    filteredArtworks.forEach(artwork => {
        let card = document.createElement("section");
        let name = document.createElement("h4");
        let media = document.createElement("p");
        let completed = document.createElement("p");
        let size = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = artwork.name;
        name.style.fontSize = "1.2rem";
        name.style.fontWeight = "600";
        media.innerHTML = `<span class="label">Media:</span> ${artwork.media}`;
        completed.innerHTML = `<span class="label">Year:</span> ${artwork.completed}`;
        size.innerHTML = `<span class="label">Size:</span> ${artwork.size}`;
        img.setAttribute("src", artwork.image);
        img.setAttribute("alt", `${artwork.name}  Artwork`);
        img.setAttribute("loading", "lazy");
        img.style.width = "150";
        img.style.height = "250";


        card.appendChild(name);
        card.appendChild(media);
        card.appendChild(completed);
        card.appendChild(size);
        card.appendChild(img);

        document.querySelector(".artwork-grid").appendChild(card);
    })
}

//hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("navigation");
const 



hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});

//--------Footer-------------
let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;

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