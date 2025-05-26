document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    // update css variables for the spotlight effect
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  })
})

// FORM SETUP //
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Show SUCCESS message //
  document.getElementById('successMessage').style.display = 'block';

  // RESET Form //
  this.reset();

  // HIDE Success message after 3 seconds //
  setTimeout(function () {
    document.getElementById('successMessage').style.display = 'none';
  }, 3000);
})

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_rw42824", "template_52beiah", this)
    .then(function () {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    }, function (error) {
      alert("Failed to send message. Error: " + JSON.stringify(error));
    });
});



