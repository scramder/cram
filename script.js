// ===== NAVIGATION ===== 
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// ===== CONTACT FORM ===== 
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validate form
            if (!nombre || !email || !asunto || !mensaje) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = `Hola! Soy ${nombre}.\n\n` +
                                  `Email: ${email}\n` +
                                  `Asunto: ${asunto}\n\n` +
                                  `Mensaje: ${mensaje}`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // WhatsApp number (replace with actual number)
            const whatsappNumber = '5492284739289'; // Format: country code + number
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            showNotification('Mensaje enviado! Te redirigimos a WhatsApp.', 'success');
        });
    }
}

// ===== CV DOWNLOAD ===== 
function downloadCV() {
    // Create CV content
    const cvContent = generateCVContent();
    
    // Create blob and download
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Cristhian_Muriel_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    showNotification('CV descargado exitosamente!', 'success');
}

function generateCVContent() {
    return `CRISTHIAN ALBERTO MURIEL
Full Stack Web Developer Jr

CONTACTO:
📧 Email: cralmuriel@gmail.com
📱 Teléfono: 2284 73 9289
📍 Ubicación: General Lamadrid, Buenos Aires
🌐 Portfolio: about.me/crismuriel

PERFIL PROFESIONAL:
Full Stack Web Developer Jr con experiencia sólida en IT, redes, soporte técnico y NOC. 
Desarrollo aplicaciones web completas (front + back) y sitios profesionales para clientes reales. 
Creador del sistema Omnia Uno. Manejo tecnologías como PHP, MySQL, HTML, CSS, JavaScript, AJAX y Netlify. 
Uso IA para acelerar desarrollo, debugging, documentación y análisis de arquitectura.

HABILIDADES TÉCNICAS:
• Full Stack: PHP, MySQL, HTML5, CSS3, JavaScript, AJAX, SPA
• Front-End: HTML/CSS, JS, animaciones, responsive design
• Back-End: PHP, MySQL, autenticación, manejo de sesiones, APIs simples
• Hosting & Deploy: Netlify, GitHub, dominios, configuraciones
• Redes: Mikrotik, Ubiquiti, redes UTP/WiFi, monitoreo (Zabbix, Grafana, The Dude)
• IT: reparación, soporte, armado, mantenimiento preventivo/correctivo
• IA aplicada: optimización de código, documentación, testing y generación de estructura

PROYECTOS DESTACADOS:
1. Omnia Uno — Sistema Web Modular (SPA) para Comercios
   Demo: https://omniaunodemo.netlify.app/login.html
   Tecnologías: PHP, MySQL, HTML, CSS, JavaScript, AJAX

2. BA Meat & Grill — Sitio profesional con integración de reservas
   Demo: https://bameatandgrill.netlify.app/index-es
   Tecnologías: HTML, CSS, JavaScript

3. Cookie Slayer — Juego 2D con sprites y parallax
   Demo: https://cookie-slayer.netlify.app/
   Tecnologías: HTML, CSS, JavaScript

4. FM 98.7 — Sitio profesional con sistema de streaming
   Demo: https://fm98punto7.com.ar/wp/
   Tecnologías: WordPress, HTML, CSS

EXPERIENCIA LABORAL:
• Operador NOC Remoto — Alvis S.A. (Dic 2021 – Feb 2022)
• Atención al Cliente / Soporte — Orinet Solano (Abr – Ago 2019)
• Soporte Técnico — Drovert Electrónica (Mar 2013 – Abr 2019)

FORMACIÓN:
• freeCodeCamp: Responsive Web Design, JavaScript Algorithms and Data Structures
• HTML5/CSS3 — Udemy
• Diplomado en Informática — Edutin Academy (Delaware, EE.UU)
• Técnico Reparador de PC e Impresoras – SEC Capital Federal

Generado desde: ${window.location.href}
Fecha: ${new Date().toLocaleDateString('es-ES')}`;
}

// ===== ANIMATIONS ===== 
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .tech-category, .timeline-item, .education-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== NOTIFICATIONS ===== 
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" aria-label="Cerrar notificación">&times;</button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ===== THEME TOGGLE (Optional) ===== 
function initThemeToggle() {
    // This could be expanded to add dark/light theme toggle
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        document.body.classList.add('dark-theme');
    }
}

// ===== PERFORMANCE OPTIMIZATIONS ===== 
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== PARALLAX EFFECT ===== 
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero::before');
    
    if (hero) {
        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate movement based on mouse position (subtle effect)
            const moveX = (x / rect.width - 0.5) * 20; // Max 20px movement
            const moveY = (y / rect.height - 0.5) * 20;
            
            // Apply transform to the hero background
            hero.style.setProperty('--mouse-x', `${moveX}px`);
            hero.style.setProperty('--mouse-y', `${moveY}px`);
        });
        
        // Reset position when mouse leaves
        hero.addEventListener('mouseleave', function() {
            hero.style.setProperty('--mouse-x', '0px');
            hero.style.setProperty('--mouse-y', '0px');
        });
    }
}

// ===== INITIALIZE ALL ===== 
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initScrollAnimations();
    initLazyLoading();
    initParallaxEffect();
});

// ===== UTILITY FUNCTIONS ===== 
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copiado al portapapeles!', 'success');
    }).catch(() => {
        showNotification('Error al copiar', 'error');
    });
}

// Make functions globally available
window.downloadCV = downloadCV;
window.scrollToTop = scrollToTop;
window.copyToClipboard = copyToClipboard;