document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        alert('Message sent successfully!'); // Show alert
        // Additional code to submit the form data to a server can be added here
        window.location.reload(); // Refresh the page
      });
    }
  });
  
      
  