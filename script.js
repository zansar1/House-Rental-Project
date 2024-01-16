document.addEventListener('DOMContentLoaded', function () {
    // register event listeners for the forms if they exist
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // registration form validation
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            // prevent form submission if validation fails
            if (!validateRegistrationForm()) {
                event.preventDefault();
            }
        });
    }

    // login form validation
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            // prevent form submission if validation fails
            if (!validateLoginForm()) {
                event.preventDefault();
            }
        });
    }

    // validate the registration form
    function validateRegistrationForm() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value.trim();

        let valid = true;
        let errorMessage = '';

        if (!username || !password || !email) {
            errorMessage = 'All fields are required.';
            valid = false;
        } else if (password.length < 8) {
            errorMessage = 'Password must be at least 8 characters long.';
            valid = false;
        }

        // display error message
        if (!valid) {
            alert(errorMessage);
        }

        return valid;
    }

    // validate the login form
    function validateLoginForm() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        let valid = true;
        let errorMessage = '';

        if (!username || !password) {
            errorMessage = 'Both username and password are required.';
            valid = false;
        }

        // display error message
        if (!valid) {
            alert(errorMessage);
        }

        return valid;
    }
});
