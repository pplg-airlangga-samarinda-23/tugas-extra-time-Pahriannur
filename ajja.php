<?php
// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Database connection
    $servername = "localhost";
    $username = "root"; // Ganti dengan username database Anda
    $password = ""; // Ganti dengan password database Anda
    $dbname = "user_db";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get form data
    $input_username = $conn->real_escape_string($_POST['username']);
    $input_password = $_POST['password'];

    // Fetch the user from the database
    $sql = "SELECT password FROM users WHERE username='$input_username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Verify the password
        if (password_verify($input_password, $row['password'])) {
            // Redirect to index.html if username and password are correct
            header("Location: index.html");
            exit();
        } else {
            $message = "Username atau password salah!";
        }
    } else {
        $message = "Username tidak ditemukan!";
    }

    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Login</title>
</head>
<body class="flex h-screen">
    <div class="content"></div>
    <div class="sidebar">
        <div class="header"></div>
        <div class="form-container">
            <?php if (!empty($message)): ?>
                <p class="message"><?= htmlspecialchars($message) ?></p>
            <?php endif; ?>
            <form action="" method="POST">
                <input type="text" name="username" placeholder="username" class="input-field" required>
                <input type="password" name="password" placeholder="password" class="input-field" required>
                <button type="submit" class="login-button">Login</button>
                <a href="#" class="forgot-password">lupa password</a>
            </form>
        </div>
    </div>
</body>
</html>