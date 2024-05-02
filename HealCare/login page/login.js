document.getElementById('registrationForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting
    event.preventDefault();
    // Validate the form inputs
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    if (nameInput === '' || emailInput === '' || passwordInput === '') {
        alert('Please fill in all fields.');
        return;
    }

    // If all fields are filled, display a success message
    alert('Registration successful!');
    // You can also submit the form to a backend server using AJAX here
    window.location.reload();
});