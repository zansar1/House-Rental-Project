<?php
session_start(); // Start the session at the beginning of the script

include 'db.php';
$loginError = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // validation...

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        // User authenticated
        $_SESSION['user'] = $username; // Store username in session variable
        header('Location: homepage.php');
        exit();
    } else {
        // Invalid credentials
        $loginError = 'Invalid credentials';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
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
        <h2>Login</h2>
        <?php if ($loginError): ?>
            <p class="error"><?php echo $loginError; ?></p>
        <?php endif; ?>
        <form id="loginForm" action="login.php" method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" name="username" id="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
