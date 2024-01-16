// Function to fetch search results from the server
async function searchHomes(query, sortOption) {
    try {
        const response = await fetch(`search.php?query=${query}&sort=${sortOption}`);
        const results = await response.json();

        // Update the UI with the search results
        updatePropertyCards(results);
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
}

// Function to update property cards based on search results
function updatePropertyCards(searchResults) {
    const propertyCardsContainer = document.getElementById('property-cards');
    propertyCardsContainer.innerHTML = '';

    searchResults.forEach((property) => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <img src="${property.image}" alt="Property Image">
            <p>Price: ${property.price}</p>
            <p>Rent: ${property.rent}</p>
            <p>Address: ${property.address}</p>
            <p>Sq. Ft.: ${property.sqft}</p>
        `;
        card.addEventListener('click', () => redirectToPropertyDetails(property.id));
        propertyCardsContainer.appendChild(card);
    });
}

// Event listener for the search button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
    const searchBar = document.getElementById('search-bar');
    const searchQuery = searchBar.value;

    // Get the selected sort option
    const filterOptions = document.getElementById('filter-options');
    const sortOption = filterOptions.value;

    // Call the searchHomes function with the search query and sort option
    searchHomes(searchQuery, sortOption);
});

// Function to fetch wishlisted homes and display them
function displayWishlistedHomes() {
    const wishlistedContainer = document.getElementById('wishlisted-container');

    // Clear existing content
    wishlistedContainer.innerHTML = '';

    // Retrieve wishlisted properties from localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Display wishlisted properties
    wishlist.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');

        // Create the HTML structure for the property card
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="Property Image">
            <h3>${property.address}</h3>
            <p>${property.price}</p>
            <!-- Add other property details as needed -->
            <button class="remove-from-wishlist-button" onclick="removeFromWishlist(${property.id})">Remove from Wishlist</button>
        `;

        // Attach event listener for clicking on the wishlisted home
        propertyCard.addEventListener('click', function () {
            // Navigate to the property details page with the property ID
            window.location.href = `property-details.php?id=${property.id}`;
        });

        // Append the property card to the wishlisted container
        wishlistedContainer.appendChild(propertyCard);
    });
}

// Call the function to display wishlisted homes when the page loads
displayWishlistedHomes();

// Function to display property cards
function displayPropertyCards() {
    const propertyCardsContainer = document.getElementById('property-cards');
    propertyCardsContainer.innerHTML = '';

    properties.forEach((property) => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <img src="${property.image}" alt="Property Image">
            <p>Price: ${property.price}</p>
            <p>Rent: ${property.rent}</p>
            <p>Address: ${property.address}</p>
            <p>Sq. Ft.: ${property.sqft}</p>
        `;
        card.addEventListener('click', () => redirectToPropertyDetails(property.id));
        propertyCardsContainer.appendChild(card);
    });
}

// Function to remove a property from the wishlist
window.removeFromWishlist = function (propertyId) {
    event.stopPropagation();
    // Retrieve wishlisted properties from localStorage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Remove the property with the specified id from the wishlist
    wishlist = wishlist.filter(property => property.id !== propertyId);

    // Update localStorage with the modified wishlist
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Refresh the displayed wishlisted homes
    displayWishlistedHomes();
};

// Function to redirect to the property details page
function redirectToPropertyDetails(propertyId) {
    // Redirect to a new page (replace 'property-details.php' with your actual details page)
    window.location.href = `property-details.php?id=${propertyId}`;
}

// Initial display of property cards
displayPropertyCards();