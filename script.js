/**
 * ============================================================
 * Emiya119 — Portfolio Website
 * Interactive behaviors & smooth animations
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initNavigation();
    initRevealOnScroll();
    initMobileMenu();
    initCountUp();
    initActiveSection();
    initCursorGlow();
    initMagneticButtons();
});

// ---------- 1. Scroll Progress Bar ----------
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    }, { passive: true });
}

// ---------- 2. Nav Background on Scroll ----------
function initNavigation() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('bg-ink-950/85', 'backdrop-blur-xl', 'border-b', 'border-white/5');
        } else {
            navbar.classList.remove('bg-ink-950/85', 'backdrop-blur-xl', 'border-b', 'border-white/5');
        }
    }, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.length < 2) return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                // Close mobile menu if open
                document.getElementById('mobile-menu')?.classList.add('hidden');
            }
        });
    });
}

// ---------- 3. Reveal on Scroll (IntersectionObserver) ----------
function initRevealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ---------- 4. Mobile Menu Toggle ----------
function initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('hidden');
        if (isOpen) {
            menu.classList.add('hidden');
            document.getElementById('line1').style.transform = '';
            document.getElementById('line2').style.opacity = '';
            document.getElementById('line3').style.transform = '';
        } else {
            menu.classList.remove('hidden');
            document.getElementById('line1').style.transform = 'translateY(6px) rotate(45deg)';
            document.getElementById('line2').style.opacity = '0';
            document.getElementById('line3').style.transform = 'translateY(-6px) rotate(-45deg)';
        }
    });
}

// ---------- 5. Animated Counter ----------
function initCountUp() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count, 10);
                const suffix = el.textContent.includes('+') ? '+' : '';
                const duration = 1500;
                const start = performance.now();

                function update(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    const current = Math.floor(eased * target);
                    el.textContent = current + suffix;
                    if (progress < 1) requestAnimationFrame(update);
                }
                requestAnimationFrame(update);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ---------- 6. Active Section Highlighting ----------
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));
}

// ---------- 7. Cursor Glow Effect (desktop only) ----------
function initCursorGlow() {
    if (window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        document.documentElement.style.setProperty('--cursor-x', glowX + 'px');
        document.documentElement.style.setProperty('--cursor-y', glowY + 'px');
        requestAnimationFrame(animate);
    }
    animate();
}

// ---------- 8. Magnetic Button Hover ----------
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.tilt-card, a[href="#contact"].bg-accent');
    if (!buttons.length || window.innerWidth < 768) return;

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const strength = 8;
            btn.style.transform = `translate(${x / rect.width * strength}px, ${y / rect.height * strength}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// ---------- 9. Parallax Hero Blobs ----------
(function initParallax() {
    if (window.innerWidth < 768) return;
    const blobs = document.querySelectorAll('.animate-float');
    if (!blobs.length) return;

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        blobs.forEach((blob, i) => {
            const factor = i === 0 ? 1 : -0.8;
            blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    }, { passive: true });
})();

// ---------- 10. Disable animations on reduced motion ----------
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none !important';
        el.style.transition = 'none !important';
    });
}
