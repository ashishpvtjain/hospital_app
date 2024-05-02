document.addEventListener("DOMContentLoaded", function () {
  const doctorsContainer = document.getElementById("doctorsContainer");

  const doctorsData = [
    {
      imgSrc: "1st.jpeg",
      name: "Dr. Ashok Kumar",
      specialist: "Cardiologist",
      hours: "Monday - Friday: 9 AM - 5 PM",
    },
    {
      imgSrc: "2nd.avif",
      name: "Dr. Vikram Patel",
      specialist: "Dermatologist",
      hours: "Monday - Friday: 10 AM - 6 PM",
    },
    {
      imgSrc: "2nd.jpeg",
      name: "Dr. Rajesh Khanna",
      specialist: "Pediatrician",
      hours: "Monday - Friday: 8 AM - 4 PM",
    },
    {
      imgSrc: "10th.jpeg",
      name: "Dr. Anjali Singh",
      specialist: "Orthopedic Surgeon",
      hours: "Monday - Friday: 11 AM - 7 PM",
    },
    {
      imgSrc: "5th.jpg",
      name: "Dr. Sanjay Kapoor",
      specialist: "Neurologist",
      hours: "Monday - Friday: 9 AM - 5 PM",
    },
    {
      imgSrc: "11th.jpeg",
      name: "Dr. Sunil Gupta",
      specialist: "Psychiatrist",
      hours: "Monday - Friday: 8 AM - 4 PM",
    },
    {
      imgSrc: "12th.jpeg",
      name: "Dr. Rahul Sharma",
      specialist: "Oncologist",
      hours: "Monday - Friday: 10 AM - 6 PM",
    },
    {
      imgSrc: "13th.jpeg",
      name: "Dr. Neha Reddy",
      specialist: "Gynecologist",
      hours: "Monday - Friday: 9 AM - 5 PM",
    },
    {
      imgSrc: "14th.jpeg",
      name: "Dr. Vikas Reddy",
      specialist: "Endocrinologist",
      hours: "Monday - Friday: 8 AM - 4 PM",
    },
    {
      imgSrc: "3rd.jpg",
      name: "Dr. Sanjay Kapoor",
      specialist: "Dentist",
      hours: "Monday - Friday: 9 AM - 5 PM",
    },
  ];

  doctorsData.forEach((doctor) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = doctor.imgSrc;
    img.alt = doctor.name + " Image";
    card.appendChild(img);

    const name = document.createElement("h3");
    name.textContent = doctor.name;
    card.appendChild(name);

    const specialist = document.createElement("p");
    specialist.textContent = "Specialist: " + doctor.specialist;
    card.appendChild(specialist);

    const hours = document.createElement("p");
    hours.textContent = "Hours: " + doctor.hours;
    card.appendChild(hours);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "Get Appointment";

    // Add click event to the button
    button.addEventListener("click", () => {
      // Display a pop-up message when the button is clicked
      alert(`Appointment request sent for ${doctor.name}`);
    });

    buttonContainer.appendChild(button);
    card.appendChild(buttonContainer);
    doctorsContainer.appendChild(card);
  });
});


  
  