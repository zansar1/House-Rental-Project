<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buyer Homepage</title>
    <link rel="stylesheet" href="homepage.css">
</head>

<body>

    <div id="banner">
        <div class="banner-content">
            <h1>Welcome to Our Buyer Dashboard</h1>
            <a href="#" id="logout-button">Logout</a>
        </div>
    </div>
    <div id="wishlisted-homes">
        <h2>Wishlisted Homes<img src="wishlist.png" alt="Wishlist Icon" class="wishlist-icon"></h2>
        <div id="wishlisted-container">
            <!-- Homes the user has wishlisted will go here -->
        </div>
    </div>

    <div class="all-properties">
        <h2 style="color: white;">All Properties</h2>

        <div class="search-bar-container">
            <input type="text" id="search-bar" placeholder="Search for homes...">
<select id="filter-options">
    <option value="price_asc">Price Ascending</option>
    <option value="price_desc">Price Descending</option>
    <option value="bedrooms_asc">Bedrooms Ascending</option>
    <option value="bedrooms_desc">Bedrooms Descending</option>
    <!-- Add more filtering options as needed -->
</select>

            <button id="search-button">Search</button>
        </div>
        <div class="all-container">
            <div id="property-cards">

            </div>
        </div>
    </div>

    <script src="shared.js"></script>
    <script src="homepage.js"></script>

</body>

</html>