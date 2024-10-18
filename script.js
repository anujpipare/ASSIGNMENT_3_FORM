document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let errors = [];
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate fields
    if (username === "") errors.push("Username cannot be empty.");
    if (email === "") errors.push("Email cannot be empty.");
    if (phone === "") errors.push("Phone number cannot be empty.");
    if (password === "") errors.push("Password cannot be empty.");
    if (confirmPassword === "") errors.push("Confirm Password cannot be empty.");

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
        errors.push("Phone number must be 10 digits and numeric.");
    }

    // Validate password
    const passwordRequirements = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/;
    if (!passwordRequirements.test(password)) {
        errors.push("Password must be at least 7 characters long, contain at least one uppercase letter, one digit, and one special character from the set (&, $, #, @).");
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Validate email
    const emailRequirements = /^[^\s@]+@[^\s@]{3,}\.[a-zA-Z]{2,3}$/;
    if (!emailRequirements.test(email)) {
        errors.push("Email must contain '@' and a '.' with valid characters.");
    }

    // Show errors or submit the form
    const errorMessagesDiv = document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML = ""; // Clear previous errors
    if (errors.length > 0) {
        errorMessagesDiv.innerHTML = errors.join("<br>");
    } else {
        alert("Registration successful!");
        // Here you could proceed to submit the form or send the data via AJAX
        // this.submit(); // Uncomment if you want to actually submit the form
    }
});
