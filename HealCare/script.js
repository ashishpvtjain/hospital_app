document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Show alert message
    alert('Message sent successfully! We will get back to you soon.');

    window.location.reload();
});