document.addEventListener('DOMContentLoaded', () => {
    // Menu móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle?.classList.remove('active');
            navLinks?.classList.remove('active');
        });
    });

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Activar enlaces de navegación según la sección visible
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    function updateActiveNavItem() {
        const fromTop = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    // Animación de aparición de cards
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Event Listeners
    window.addEventListener('scroll', updateActiveNavItem);
    updateActiveNavItem();

    // Animación suave para el scroll al inicio
    window.history.scrollRestoration = 'manual';

    // Additional script for smooth scrolling
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Additional script for menu toggle animation
    menuToggle.addEventListener('click', () => {
        const lines = menuToggle.querySelectorAll('span');
        lines[0].classList.toggle('toggle-line-1');
        lines[1].classList.toggle('toggle-line-2');
        lines[2].classList.toggle('toggle-line-3');
    });
});
``` ▋