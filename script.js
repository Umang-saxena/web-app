// Initialize web app
console.log('Skill Development Hub initialized.');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// CTA Button click handler
document.querySelector('.cta-button').addEventListener('click', () => {
  document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = e.target.children[0].value;
  const email = e.target.children[1].value;
  const message = e.target.children[2].value;
  
  // Simple validation
  if (name && email && message) {
    // Show success message
    const button = e.target.querySelector('.submit-button');
    const originalText = button.textContent;
    button.textContent = '✓ Message Sent!';
    button.style.background = '#10b981';
    
    // Reset form
    e.target.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
    }, 3000);
  }
});

// Add animation on scroll for skill cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});
