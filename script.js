// ==================== //
// NAVBAR SCROLL SHADOW //
// ==================== //

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== //
// MOBILE MENU TOGGLE   //
// ==================== //

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ==================== //
// SMOOTH SCROLL        //
// ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==================== //
// SCROLL ANIMATIONS    //
// ==================== //

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections with fade-in class
window.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fade-in-section');
    animatedElements.forEach(el => observer.observe(el));
});

// ==================== //
// CONTACT FORM         //
// ==================== //

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In production, you would send this data to a backend API
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString()
        });
        
        // Show success message
        alert('Thank you for reaching out! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // Optional: You can integrate with services like:
        // - Formspree: https://formspree.io/
        // - EmailJS: https://www.emailjs.com/
        // - Netlify Forms: https://www.netlify.com/products/forms/
        // - Google Forms API
        
        // Example with EmailJS (if you set it up):
        // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        //     from_name: name,
        //     from_email: email,
        //     message: message
        // }).then(
        //     function(response) {
        //         alert('Message sent successfully!');
        //         contactForm.reset();
        //     },
        //     function(error) {
        //         alert('Failed to send message. Please try again.');
        //         console.error('Error:', error);
        //     }
        // );
    });
}