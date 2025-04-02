// Simulated pet data (shared across all pages)
let pets = [
    {
        name: "Buddy",
        image: "data:image/jpeg;base64,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",
        age: "2 years",
        vaccinated: "Yes",
        contact: "+91 9876543210",
        address: "123 Main St, Solpaur",
        breed: "Labrador",
        tags: ["#dog"]
    },
    {
        name: "Max",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZ3Iyz-5gbsQMa-gzBdOdg0JNBwPhoAdBNA&s",
        age: "3 years",
        vaccinated: "No",
        contact: "+91 8765432109",
        address: "456 Oak Ave, Solpaur",
        breed: "German Shepherd",
        tags: ["#dog"]
    },
    {
        name: "Luna",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHklMjBkb2d8ZW58MHx8MHx8fDA%3D",
        age: "1 year",
        vaccinated: "Yes",
        contact: "+91 7654321098",
        address: "789 Pine Rd, Solpaur",
        breed: "Golden Retriever",
        tags: ["#dog"]
    },
    {
        name: "Whiskers",
        image: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a",
        age: "4 years",
        vaccinated: "Yes",
        contact: "+91 6543210987",
        address: "321 Elm St, Solpaur",
        breed: "Persian",
        tags: ["#cat"]
    },
    {
        name: "Fluffy",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
        age: "2 years",
        vaccinated: "Yes",
        contact: "+91 5432109876",
        address: "654 Birch Ln, Solpaur",
        breed: "Maine Coon",
        tags: ["#cat"]
    },
    {
        name: "Dobby",
        image: "https://cdn-fastly.petguide.com/media/2022/02/16/8223122/cashmere-lop.jpg?size=720x845&nocrop=1",
        age: "1 year",
        vaccinated: "No",
        contact: "+91 4321098765",
        address: "987 Cedar Dr, Solpaur",
        breed: "Lop Rabbit",
        tags: ["#other"]
    },
    {
        name: "Tofu",
        image: "data:image/jpeg;base64,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",
        age: "1 year",
        vaccinated: "No",
        contact: "+91 4321098765",
        address: "987 Cedar Dr, Solpaur",
        breed: "Parrot",
        tags: ["#other"]
    },
    {
        name: "Sky",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLp-Zk6ArxmKRSTs6XcYMzAKpBwtGZjN07yw&s",
        age: "1 year",
        vaccinated: "No",
        contact: "+91 4321098765",
        address: "987 Cedar Dr, Solpaur",
        breed: "Turtle",
        tags: ["#other"]
    },
    {
        name: "Dodo",
        image: "https://d2zp5xs5cp8zlg.cloudfront.net/image-34868-800.jpg",
        age: "1 year",
        vaccinated: "No",
        contact: "+91 4321098765",
        address: "987 Cedar Dr, Solpaur",
        breed: "Hamster",
        tags: ["#other"]
    }
];

// Determine the pet category based on the page URL
function getPetCategory() {
    const path = window.location.pathname;
    if (path.includes("dogPage.html")) return "#dog";
    if (path.includes("catPage.html")) return "#cat";
    if (path.includes("otherPets.html")) return "#other";
    return "#dog"; // Default to #dog if no match
}

// Function to display pet cards
function displayPets(petsToDisplay) {
    const petCardsContainer = document.getElementById("petCards");
    petCardsContainer.innerHTML = ""; // Clear existing cards

    petsToDisplay.forEach(pet => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");

        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}" class="pet-image">
            <div class="pet-name">${pet.name}</div>
            <div class="pet-info">
                <p><strong>Name:</strong> ${pet.name}</p>
                <p><strong>Age:</strong> ${pet.age}</p>
                <p><strong>Vaccinated:</strong> ${pet.vaccinated}</p>
                <p><strong>Contact:</strong> ${pet.contact}</p>
                <p><strong>Address:</strong> ${pet.address}</p>
            </div>
        `;

        petCardsContainer.appendChild(petCard);
    });
}

// Function to filter pets by breed and search term
function filterPets() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const selectedBreed = document.getElementById("breedFilter").value;
    const petCategory = getPetCategory(); // Dynamically get the category

    let filteredPets = pets.filter(pet => pet.tags.includes(petCategory)); // Filter by category (#dog, #cat, #other)

    // Filter by breed
    if (selectedBreed) {
        filteredPets = filteredPets.filter(pet => pet.breed === selectedBreed);
    }

    // Filter by search term
    if (searchTerm) {
        filteredPets = filteredPets.filter(pet => pet.name.toLowerCase().includes(searchTerm));
    }

    displayPets(filteredPets);
}

// Initial display of pets
document.addEventListener("DOMContentLoaded", () => {
    filterPets();
});

// Event listeners for search and filter
document.getElementById("searchInput").addEventListener("input", filterPets);
document.getElementById("breedFilter").addEventListener("change", filterPets);

// Simulate adding a new pet (for donation scenario)
function addPet(petData) {
    pets.push(petData);
    filterPets(); // Refresh the display
}

// Example of adding a new pet (you'll replace this with your form submission logic)
const newPet = {
    name: "Rocky",
    image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80",
    age: "5 years",
    vaccinated: "Yes",
    contact: "+91 5432109876",
    address: "654 Birch Ln, Solpaur",
    breed: "Bulldog",
    tags: ["#dog"]
};

// Simulate form submission (remove this in your actual implementation)
setTimeout(() => {
    addPet(newPet);
    console.log("New pet added:", newPet);
}, 2000);