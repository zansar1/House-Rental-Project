<?php
// Include your database connection file
include 'db.php';

// Check if the 'query' and 'sort' parameters are set in the URL
if (isset($_GET['query']) && isset($_GET['sort'])) {
    $searchQuery = $_GET['query'];
    $sortOption = $_GET['sort'];

    // Define the default order if not specified
    $order = 'ASC';

    // Validate and set the order based on the sort option
    if ($sortOption === 'bedrooms_asc' || $sortOption === 'price_asc') {
        $order = 'ASC';
    } elseif ($sortOption === 'bedrooms_desc' || $sortOption === 'price_desc') {
        $order = 'DESC';
    }

    // Define the columns for sorting
    $sortBy = ($sortOption === 'bedrooms_asc' || $sortOption === 'bedrooms_desc') ? 'bedrooms' : 'price';

    // Prepare and execute the search query with sorting
    $stmt = $pdo->prepare("SELECT * FROM properties WHERE LOWER(address) LIKE LOWER(:query) OR LOWER(description) LIKE LOWER(:query) ORDER BY $sortBy $order");
    $stmt->bindValue(':query', '%' . $searchQuery . '%', PDO::PARAM_STR);
    $stmt->execute();

    // Fetch the results as an associative array
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the results as JSON
    header('Content-Type: application/json');
    echo json_encode($results);
} else {
    // If 'query' or 'sort' parameters are not set, return an error response
    header("HTTP/1.1 400 Bad Request");
    echo json_encode(['error' => 'Missing search query or sort option']);
}
?>
