// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for client-side validation

    // Clear previous errors
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    // Username validation
    if (username.length < 6) {
        document.getElementById('usernameError').textContent = 'Username must be at least 6 characters long.';
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        valid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 8 characters, one capital letter, and one number
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters, with one capital letter and one number.';
        valid = false;
    }

    // Submit form if valid
    if (valid) {
        alert("Form is valid and ready for submission.");
        // Normally here you might send the form data to a server or proceed further
    }
});
