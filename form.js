function validateName() {
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name"); // Corrected this line
    const nameMessage = document.getElementById("nameMessage");
    
    if (name.length >= 3) {
        nameInput.style.borderColor = "green"; // Corrected property name to borderColor
        nameMessage.textContent = "Name looks good";
        nameMessage.style.color = "green";
        return true;
    } else {
        nameInput.style.borderColor = "red"; // Corrected property name to borderColor
        nameMessage.textContent = "Name should be at least 3 characters long";
        nameMessage.style.color = "red";
        return false;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email"); // Corrected this line
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Added regular expression for email validation

    if (emailPattern.test(email)) { // Corrected condition to check the email against the pattern
        emailInput.style.borderColor = "green"; // Corrected property name to borderColor
        emailMessage.textContent = "Email looks good";
        emailMessage.style.color = "green";
        return true;
    } else {
        emailInput.style.borderColor = "red"; // Corrected property name to borderColor
        emailMessage.textContent = "Enter a valid email";
        emailMessage.style.color = "red";
        return false;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordInput = document.getElementById("password"); // Corrected this line
    const passwordMessage = document.getElementById("passwordMessage");

    if (password.length >= 6) { // Corrected condition to check password length correctly
        passwordInput.style.borderColor = "green"; // Corrected property name to borderColor
        passwordMessage.textContent = "Password looks strong";
        passwordMessage.style.color = "green";
        return true;
    } else {
        passwordInput.style.borderColor = "red"; // Corrected property name to borderColor
        passwordMessage.textContent = "Password should be at least 6 characters long";
        passwordMessage.style.color = "red";
        return false;
    }
}

document.getElementById("myform").addEventListener("submit", function(event) { // Fixed syntax
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    
    if (!isValidName || !isValidEmail || !isValidPassword) {
        event.preventDefault(); // Prevent form submission if any validation fails
    }
});
