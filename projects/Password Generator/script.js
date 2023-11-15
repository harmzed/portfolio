// This function generates a password based on user input and updates the UI.
function generatePassword() {
    // Get user input values
    const length = document.getElementById("passwordLength").value;
    const includeUpperCase = document.getElementById("upperCaseCheckbox").checked;
    const includeLowerCase = document.getElementById("lowerCaseCheckbox").checked;
    const includeNumbers = document.getElementById("numbersCheckbox").checked;
    const includeSymbols = document.getElementById("symbolsCheckbox").checked;

    // Generate a character set based on user choices
    const characters = generateCharacterString(includeUpperCase, includeLowerCase, includeNumbers, includeSymbols);

    // Ensure at least one character set is selected
    if (characters === "") {
        alert("Please select at least one option.");
        return;
    }

    // Generate a random password and display it
    const password = generateRandomPassword(characters, length);
    const generatedPasswordElement = document.getElementById("passwordOutput");
    generatedPasswordElement.value = password;

    // Calculate and display the password's estimated strength
    const strength = calculatePasswordStrength(password);
    displayPasswordStrength(strength);
}

// This function generates a character set based on user choices.
function generateCharacterString(upper, lower, numbers, symbols) {
    let characters = "";
    if (upper) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (symbols) characters += "!@#$%^&*()-_+=[]{}|;:'\",.<>/?";

    return characters;
}

// This function generates a random password using the provided character set and length.
function generateRandomPassword(characters, length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    return password;
}

// This function updates the displayed password length value.
function updatePasswordLength() {
    const length = document.getElementById("passwordLength").value;
    document.getElementById("passwordLengthLabel").innerText = length;
}

// This function estimates the password strength based on length and character types.
function calculatePasswordStrength(password) {
    const length = password.length;
    const characterTypes = (/[A-Z]/.test(password) ? 1 : 0) +
                           (/[a-z]/.test(password) ? 1 : 0) +
                           (/[0-9]/.test(password) ? 1 : 0) +
                           (/[!@#$%^&*()-_+=\[\]{}|;:'",.<>\/?]/.test(password) ? 1 : 0);

    return length + characterTypes * 2;
}
// This function displays the estimated password strength.
function displayPasswordStrength(strength) {
    let strengthText = "Strength: ";
    if (strength >= 15) {
        strengthText += "Strong";
    } else if (strength >= 10) {
        strengthText += "Moderate";
    } else {
        strengthText += "Weak";
    }

    document.getElementById("passwordStrength").innerText = strengthText;
}
function copyPasswordToClipboard() {
    const passwordOutput = document.getElementById("passwordOutput");
    passwordOutput.select();
    document.execCommand("copy");
    // Optionally, you can provide user feedback
    alert("Password copied to clipboard: " + passwordOutput.value);
  }
  