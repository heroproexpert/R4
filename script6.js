// Add a menu toggle button
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('active');
});

// Add a smooth scroll effect to links
const links = document.querySelectorAll('a');
for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
}

// Add a form validation script
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Validate the form fields
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  if (nameInput.value === '') {
    alert('Please enter your name.');
    return;
  }

  if (emailInput.value === '') {
    alert('Please enter your email address.');
    return;
  }

  if (!emailInput.value.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  if (messageInput.value === '') {
    alert('Please enter a message.');
    return;
  }

  // Submit the form
  form.submit();
});
