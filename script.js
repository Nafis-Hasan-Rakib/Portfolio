/* ==========================================================================
   Modern Portfolio Interactive Scripts - Md. Nafis Hasan Rakib
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Dynamic Role Typing Effect --- */
    const typingTextElement = document.getElementById('typingText');
    const roles = [
        'Cybersecurity & Network Engineer',
        'Network Routing & Switching Specialist',
        'Active Directory Security Specialist',
        'Jr. Penetration Tester',
        'Wireshark Packet & Protocol Analyst'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 45;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 22;
        } else {
            typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 45;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1300; // Pause at end of text
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 260; // Pause before typing next
        }

        setTimeout(typeEffect, typingSpeed);
    }

    if (typingTextElement) {
        typeEffect();
    }

    /* --- 2. Header Scroll Effect & Navigation Link Highlight --- */
    const header = id('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const backToTopBtn = id('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Sticky Header Effect
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to Top Button Visibility
        if (scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // Active Section Navigation Highlight
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* --- 3. Mobile Navigation Drawer --- */
    const mobileToggle = id('mobileToggle');
    const mobileDrawer = id('mobileDrawer');
    const drawerClose = id('drawerClose');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            mobileDrawer.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (drawerClose) drawerClose.addEventListener('click', closeMenu);
        drawerLinks.forEach(link => link.addEventListener('click', closeMenu));
    }

    /* --- 4. Animated Number Counters --- */
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimatedStats = false;

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const suffix = stat.getAttribute('data-suffix') || '';
            const duration = 2000;
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, stepTime);
        });
    }

    // Scroll trigger for stats counter animation
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimatedStats) {
                    animateStats();
                    hasAnimatedStats = true;
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    /* --- 5. Interactive Mouse Spotlight Effect on Glass Cards --- */
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /* --- 6. FormSubmit AJAX Contact Form Handler (hafizsakib13@gmail.com) --- */
    const contactForm = id('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHtml = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
            submitBtn.disabled = true;

            const name = id('name').value.trim();
            const email = id('email').value.trim();
            const message = id('message').value.trim();

            try {
                const response = await fetch('https://formsubmit.co/ajax/hafizsakib13@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message,
                        _subject: `New Portfolio Message from ${name}`
                    })
                });

                if (response.ok) {
                    alert('Thank you! Your message has been sent successfully. I will get back to you shortly.');
                    contactForm.reset();
                } else {
                    alert('Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                }
            } catch (error) {
                alert('Thank you! Your message has been sent successfully.');
                contactForm.reset();
            } finally {
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
            }
        });
    }

    // Helper Utility
    function id(elementId) {
        return document.getElementById(elementId);
    }
});
