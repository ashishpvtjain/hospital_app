const feedbackData = [
    { name: 'John Doe', rating: 5, comment: 'Excellent service!' },
    { name: 'Jane Smith', rating: 4, comment: 'Good experience overall.' },
    { name: 'Michael Johnson', rating: 5, comment: 'Highly recommended!' },
    { name: 'Emily Brown', rating: 4, comment: 'Professional staff and clean environment.' },
    { name: 'David Lee', rating: 5, comment: 'Great facilities and caring staff.' },
    { name: 'Sarah Wilson', rating: 4, comment: 'Impressed with the level of care provided.' },
    { name: 'James Anderson', rating: 5, comment: 'Top-notch medical services!' },
    { name: 'Olivia Martin', rating: 4, comment: 'Responsive and knowledgeable doctors.' },
    { name: 'William Taylor', rating: 5, comment: 'Outstanding experience from start to finish.' },
    { name: 'Sophia Clark', rating: 4, comment: 'Friendly and efficient service.' },
    { name: 'Benjamin White', rating: 5, comment: 'Would recommend to friends and family.' },
    { name: 'Ava Hall', rating: 4, comment: 'Helpful and supportive staff members.' },
    { name: 'Jacob Harris', rating: 5, comment: 'Exceeded my expectations in every way.' },
    { name: 'Mia Thompson', rating: 4, comment: 'Great value for the quality of care provided.' },
    { name: 'Ethan Martinez', rating: 5, comment: 'Thankful for the professionalism and kindness.' },
    { name: 'Amelia Garcia', rating: 4, comment: 'Efficient processes and minimal wait times.' },
    { name: 'Alexander Rodriguez', rating: 5, comment: 'An exemplary healthcare institution.' },
    { name: 'Charlotte Lewis', rating: 4, comment: 'Consistently excellent service.' },
    { name: 'Daniel Young', rating: 5, comment: 'Impressed by the dedication of the medical team.' },
    { name: 'Scarlett Harris', rating: 4, comment: 'Prompt attention to patient needs.' },
    { name: 'Logan King', rating: 5, comment: 'A model of patient-centered care.' }
];

const feedbackDisplay = document.getElementById('feedbackDisplay');

feedbackData.forEach(feedback => {
    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');
    feedbackItem.innerHTML = `
        <p><strong>Name:</strong> ${feedback.name}</p>
        <p><strong>Rating:</strong> <span class="rating-stars">&#9733;</span>${feedback.rating}</p>
        <p><strong>Comment:</strong> ${feedback.comment}</p>
    `;

    feedbackDisplay.appendChild(feedbackItem);
});


// Example JavaScript code for form submission handling (if required)
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for this example
    // Add your form submission logic here, such as sending the data to a server
    alert('Feedback submitted successfully!');

    window.location.reload();
});









