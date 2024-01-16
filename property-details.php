<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Property Details</title>
    <link rel="stylesheet" href="property-details.css">
</head>

<body>

    <div id="property-details-container">
        <!-- Property details content goes here -->

        <!-- "Contact the Seller" button -->

    </div>
    <div class="button-container">
        <!-- Wishlist button -->
        <button id="wishlist-button" onclick="addToWishlist()">Add to Wishlist
            <img src="wishlist.png" alt="Wishlist Icon"> </button>
        <!-- Contact button -->
        <button id="contact-button" onclick="showContactForm()">Contact the Seller</button>
    </div>
    <!-- Contact form (initially hidden) -->
    <div id="contact-form" class="hidden">
        <h2>Contact the Seller</h2>
        <form id="seller-contact-form">
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button id="submit-button">Submit</button>
        </form>
    </div>

    <script src="shared.js"></script>
    <script src="property-details.js"></script>

</body>

</html>