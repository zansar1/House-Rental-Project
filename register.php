<?php
include 'db.php';
$registrationError = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $email = $_POST['email'];

    // Add your validation here
    // Check for existing username or email, etc.

    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
        $stmt->execute([$username, $password, $email]);

        // Redirect to login page
        header('Location: login.php'); 
        exit();
    } catch (PDOException $e) {
        $registrationError = 'Error: ' . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>
    <div class="navbar">
        <a href="index.php">
            <i class="material-icons navbar-icon">house</i>
        </a>
        <a href="login.php" class="nav-button">Login</a>
        <a href="register.php" class="nav-button">Register</a>
    </div>
    <div class="form-container">
        <h2>Register</h2>
        <?php if ($registrationError): ?>
            <p class="error"><?php echo $registrationError; ?></p>
        <?php endif; ?>
        <form id="registerForm" action="register.php" method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" name="username" id="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" required>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
