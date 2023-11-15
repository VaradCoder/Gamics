// Sample card data for the first gaming section
const cardData1 = [
    {
        id: 1,
        title: "Game 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imageUrl: "image1.jpg",
    },
    {
        id: 2,
        title: "Game 2",
        description: "Praesent non dolor eget purus iaculis facilisis vel nec urna.",
        imageUrl: "image2.jpg",
    },
    // Add more card data objects as needed for the first section
];

// Sample card data for the second gaming section
const cardData2 = [
    {
        id: 3,
        title: "Game 3",
        description: "Another exciting game description.",
        imageUrl: "image3.jpg",
    },
    {
        id: 4,
        title: "Game 4",
        description: "More gaming adventures await!",
        imageUrl: "image4.jpg",
    },
    // Add more card data objects as needed for the second section
];

// Function to create a card element
function createCard(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
        <img src="${card.imageUrl}" alt="${card.title}">
        <div class="card-content">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
            <button class="download-button">Download</button>
        </div>
    `;
    return cardElement;
}

// Function to generate cards and append them to the container
function generateCards(cardData, containerId) {
    const cardContainer = document.getElementById(containerId);
    cardData.forEach((card) => {
        const cardElement = createCard(card);
        cardContainer.appendChild(cardElement);
    });
}

// Call the generateCards function to populate the gaming sections with cards
generateCards(cardData1, "card-container-1");
generateCards(cardData2, "card-container-2");

// Add more gaming sections and populate them with cards as needed

// JavaScript code for search functionality
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-submit");
    const searchContainer = document.querySelector(".search-container");
    const searchClose = document.querySelector(".search-close");
    const searchField = document.querySelector(".search-field");
    const cards = document.querySelectorAll(".card");

    // Function to toggle the search container
    function toggleSearch() {
        searchContainer.classList.toggle("active");
    }

    // Function to filter cards based on search input
    function filterCards() {
        const searchTerm = searchField.value.toLowerCase();
        cards.forEach(function (card) {
            const cardTitle = card.querySelector("h2").textContent.toLowerCase();
            if (cardTitle.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Event listeners
    searchButton.addEventListener("click", toggleSearch);
    searchClose.addEventListener("click", toggleSearch);
    searchField.addEventListener("input", filterCards);
});
