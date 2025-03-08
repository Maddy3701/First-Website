// Get DOM elements
const passwordInput = document.getElementById('password-input');
const strengthMessage = document.getElementById('strength-message');
const strengthBar = document.getElementById('strength-bar');
const passwordForm = document.getElementById('password-form');

// Add input event listener to check password strength
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);

    // Update strength message and progress bar based on strength
    if (strength === 0) {
        strengthMessage.textContent = 'Enter a password';
        strengthBar.style.width = '0';
        strengthBar.style.backgroundColor = 'transparent';
    } else if (strength <= 2) {
        strengthMessage.textContent = 'Weak';
        strengthBar.style.width = '33%';
        strengthBar.style.backgroundColor = '#e74c3c'; // Red for weak
    } else if (strength === 3) {
        strengthMessage.textContent = 'Medium';
        strengthBar.style.width = '66%';
        strengthBar.style.backgroundColor = '#f1c40f'; // Yellow for medium
    } else if (strength === 4) {
        strengthMessage.textContent = 'Strong';
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = '#2ecc71'; // Green for strong
    }
});

// Calculate password strength based on criteria
function calculatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++; // At least 8 characters
    if (/[A-Z]/.test(password)) strength++; // Contains uppercase letters
    if (/[0-9]/.test(password)) strength++; // Contains numbers
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Contains special characters

    return strength;
}

// Handle form submission
passwordForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);

    if (strength < 3) {
        alert('Your password is too weak! Please choose a stronger password.');
    } else {
        alert('Your password is strong enough! Proceeding...');
    }
});