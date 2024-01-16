document.addEventListener('DOMContentLoaded', function () {
    // Function to get property details from the URL parameter
    function getPropertyDetails() {
        const urlParams = new URLSearchParams(window.location.search);
        const propertyId = urlParams.get('id');
        return properties.find(property => property.id == propertyId);

    }
    function toggleContactForm() {
        const contactForm = document.getElementById('contact-form');
        const isHidden = contactForm.classList.contains('hidden');

        if (isHidden) {
            contactForm.classList.remove('hidden');
        } else {
            contactForm.classList.add('hidden');
        }
    }

    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', toggleContactForm);
    }
    const wishlistButton = document.getElementById('wishlist-button');
    if (wishlistButton) {
        wishlistButton.addEventListener('click', addToWishlist);
    }
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', function () {
            event.preventDefault();

            toggleContactForm();
        });
    }
    function addToWishlist() {
        const property = getPropertyDetails();

        if (property) {
            // Get the wishlist from local storage (or initialize an empty array)
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

            // Check if the property is not already in the wishlist
            if (!wishlist.find(wishlistProperty => wishlistProperty.id === property.id)) {
                // Add the property to the wishlist
                wishlist.push(property);

                // Update local storage with the new wishlist
                localStorage.setItem('wishlist', JSON.stringify(wishlist));

                // Optionally, you can update the UI to reflect the change
                alert('Property added to wishlist!');
            } else {
                alert('This property is already in your wishlist.');
            }
        }
    }


    // Function to display property details
    function displayPropertyDetails() {
        const propertyDetailsContainer = document.getElementById('property-details-container');
        const property = getPropertyDetails();

        if (property) {
            propertyDetailsContainer.innerHTML = `
                <a href="homepage.php" id="home-button">Home</a>
                <h2>${property.address}</h2>
                <img src="${property.image}" alt="Property Image">
                <div id="property-description">
                    <label>Description:</label>
                    <p>${property.description}</p>
                </div>
                <div class="property-info">
                    <label>Price:</label>
                    <p>${property.price}</p>
                </div>
                <div class="property-info">
                    <label>Rent:</label>
                    <p>${property.rent}</p>
                </div>
                <div class="property-info">
                    <label>Sq. Ft.:</label>
                    <p>${property.sqft}</p>
                </div>
                <div class="property-info">
                    <label>Bedrooms:</label>
                    <p>${property.bedrooms}</p>
                </div>
                <div class="property-info">
                    <label>Bathrooms:</label>
                    <p>${property.bathrooms}</p>
                </div>
                <div class="property-info">
                    <label>Appliances:</label>
                    <p>${property.appliances}</p>
                </div>
                <div class="property-info">
                    <label>Basement:</label>
                    <p>${property.basement ? 'Yes' : 'No'}</p>
                </div>
                <div class="property-info">
                    <label>Flooring Type:</label>
                    <p>${property.flooring}</p>
                </div>
                <div class="property-info">
                    <label>Heating System:</label>
                    <p>${property.heating}</p>
                </div>
                <div class="property-info">
                    <label>Cooling System:</label>
                    <p>${property.cooling}</p>
                </div>
                <div class="property-info">
                    <label>Lot Size:</label>
                    <p>${property.lotSize}</p>
                </div>
                <div class="property-info">
                    <label>Year Built:</label>
                    <p>${property.yearBuilt}</p>
                </div>
                <div class="property-info">
                    <label>HOA:</label>
                    <p>${property.hoa ? 'Yes' : 'No'}</p>
                </div>
                
            `;
        } else {
            propertyDetailsContainer.innerHTML = '<p>Property not found</p>';
        }
    }

    // Initial display
    displayPropertyDetails();
});
