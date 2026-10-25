
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
            typingTextElement.textContent =
                currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 22;
        } else {
            typingTextElement.textContent =
                currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 45;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1300;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 260;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    if (typingTextElement) {
        typeEffect();
    }

    /* --- 2. Header Scroll Effect & Navigation Highlight --- */
    const header = id('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const backToTopBtn = id('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (header) {
            header.classList.toggle('scrolled', scrollY > 50);
        }

        if (backToTopBtn) {
            backToTopBtn.classList.toggle('visible', scrollY > 400);
        }

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
            ) {
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

        if (drawerClose) {
            drawerClose.addEventListener('click', closeMenu);
        }

        drawerLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    /* --- 4. Animated Number Counters --- */
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimatedStats = false;

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(
                stat.getAttribute('data-target'),
                10
            );
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

    const statsSection = document.querySelector('.stats-grid');

    if (statsSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimatedStats) {
                    animateStats();
                    hasAnimatedStats = true;
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    /* --- 5. Interactive Mouse Spotlight Effect --- */
    const glassCards = document.querySelectorAll('.glass-card');

    glassCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /* --- 6. Web3Forms Contact Form Handler --- */
    const contactForm = id('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async e => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector(
                'button[type="submit"]'
            );

            if (!submitBtn) return;

            const originalBtnHtml = submitBtn.innerHTML;
            const name = id('name')?.value.trim() || '';
            const email = id('email')?.value.trim() || '';
            const message = id('message')?.value.trim() || '';

            if (!name || !email || !message) {
                alert('Please complete all fields before sending your message.');
                return;
            }

            submitBtn.disabled = true;
            submitBtn.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Sending...';

            const formData = new FormData();

            // Web3Forms access key
            formData.append(
                'access_key',
                '5e79ddb7-e999-45f6-95b6-fc1f926bf033'
            );

            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            formData.append(
                'subject',
                `New Portfolio Message from ${name}`
            );

            try {
                const response = await fetch(
                    'https://api.web3forms.com/submit',
                    {
                        method: 'POST',
                        body: formData
                    }
                );

                const result = await response.json();

                if (response.ok && result.success) {
                    alert(
                        'Message sent successfully! Thank you for contacting me.'
                    );
                    contactForm.reset();
                } else {
                    console.error(
                        'Web3Forms submission failed:',
                        result
                    );

                    alert(
                        'Your message could not be sent. ' +
                        (result.message ||
                        'Please check your Web3Forms access key and settings, then try again.')
                    );
                }
            } catch (error) {
                console.error('Web3Forms request error:', error);

                alert(
                    'A network error occurred. Please check your internet connection and try again.'
                );
            } finally {
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
            }
        });
    }

    /* --- Helper Utility --- */
    function id(elementId) {
        return document.getElementById(elementId);
    }

});
