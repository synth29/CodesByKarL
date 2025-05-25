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



const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: 'POST',
    body: formData
  });

  const result = await response.text();

  if (result.trim() === 'success') {
    form.reset();
    successMessage.style.display = 'block';
  } else {
    alert('There was a problem sending your message.');
  }
});

