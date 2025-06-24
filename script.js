// Global Variables
let isLoading = true;
let currentTheme = localStorage.getItem('theme') || 'light';
let typedTextIndex = 0;
let typedCharIndex = 0;
let isDeleting = false;

// Typed Text Array
const typedTexts = [
    'Full Stack Developer',
    'UI/UX Designer', 
    'Problem Solver',
    'Tech Enthusiast'
];

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.getElementById('contact-form');
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set initial theme
    setTheme(currentTheme);
    
    // Start loading sequence
    setTimeout(() => {
        hideLoadingScreen();
        startTypingAnimation();
        initializeAnimations();
        initializeEventListeners();
        initializeIntersectionObserver();
    }, 2000);
}

// Loading Screen
function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        isLoading = false;
        document.body.style.overflow = 'auto';
    }, 500);
}

// Theme Toggle
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Typing Animation
function startTypingAnimation() {
    const typedElement = document.getElementById('typed-text');
    
    function typeText() {
        const currentText = typedTexts[typedTextIndex];
        
        if (!isDeleting && typedCharIndex < currentText.length) {
            typedElement.textContent += currentText.charAt(typedCharIndex);
            typedCharIndex++;
            setTimeout(typeText, 100);
        } else if (isDeleting && typedCharIndex > 0) {
            typedElement.textContent = currentText.substring(0, typedCharIndex - 1);
            typedCharIndex--;
            setTimeout(typeText, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                typedTextIndex = (typedTextIndex + 1) % typedTexts.length;
            }
            setTimeout(typeText, 1000);
        }
    }
    
    typeText();
}

// Navigation
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Update active navigation link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Scroll Effects
function handleScroll() {
    const scrollY = window.scrollY;
    
    // Navbar background
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Scroll to top button
    if (scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroHeight = hero.offsetHeight;
        if (scrollY < heroHeight) {
            hero.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }
}

// Skills Section
function initializeSkills() {
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillGroups = document.querySelectorAll('.skill-group');
    
    skillCategories.forEach(category => {
        category.addEventListener('click', () => {
            const targetCategory = category.getAttribute('data-category');
            
            // Update active category
            skillCategories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            
            // Show target skill group
            skillGroups.forEach(group => {
                group.classList.remove('active');
                if (group.classList.contains(targetCategory) || targetCategory === 'all') {
                    group.classList.add('active');
                }
            });
            
            // Animate skill bars
            setTimeout(() => {
                animateSkillBars();
            }, 300);
        });
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-group.active .skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Projects Filtering
function initializeProjects() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(button => button.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.display = 'block';
                } else {
                    card.classList.add('hidden');
                    setTimeout(() => {
                        if (card.classList.contains('hidden')) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });
}

// Experience Tabs
function initializeExperience() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const timelines = document.querySelectorAll('.timeline');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(button => button.classList.remove('active'));
            btn.classList.add('active');
            
            // Show target timeline
            timelines.forEach(timeline => {
                timeline.classList.remove('active');
                if (timeline.classList.contains(targetTab)) {
                    timeline.classList.add('active');
                }
            });
        });
    });
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Contact Form
function initializeContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn');
        const formData = new FormData(contactForm);
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
            
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
    
    // Floating labels
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() !== '') {
                input.setAttribute('data-filled', 'true');
            } else {
                input.removeAttribute('data-filled');
            }
        });
    });
}

// Newsletter Form
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        const submitBtn = newsletterForm.querySelector('button');
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        try {
            // Simulate subscription (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            showNotification('Successfully subscribed to newsletter!', 'success');
            newsletterForm.reset();
            
        } catch (error) {
            showNotification('Subscription failed. Please try again.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--bg-primary);
                border: 1px solid var(--border-color);
                border-radius: var(--border-radius);
                padding: 1rem;
                box-shadow: var(--shadow-heavy);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 1rem;
                min-width: 300px;
                animation: slideInRight 0.3s ease;
            }
            
            .notification-success {
                border-left: 4px solid #10b981;
            }
            
            .notification-error {
                border-left: 4px solid #ef4444;
            }
            
            .notification-info {
                border-left: 4px solid var(--primary-color);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                flex: 1;
            }
            
            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                color: var(--text-secondary);
                padding: 0.25rem;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Custom Cursor
function initializeCustomCursor() {
    if (window.innerWidth <= 768) return; // Disable on mobile
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // Cursor movement
        cursorX += (mouseX - cursorX) * 0.9;
        cursorY += (mouseY - cursorY) * 0.9;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Follower movement
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .blog-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// Intersection Observer for Animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Trigger specific animations
                if (entry.target.classList.contains('about')) {
                    setTimeout(() => animateCounters(), 500);
                }
                
                if (entry.target.classList.contains('skills')) {
                    setTimeout(() => animateSkillBars(), 500);
                }
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe individual elements
    document.querySelectorAll('.project-card, .blog-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize Animations
function initializeAnimations() {
    // Add stagger animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add stagger animation to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Event Listeners
function initializeEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Scroll to top
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initialize components
    initializeNavigation();
    initializeSkills();
    initializeProjects();
    initializeExperience();
    initializeContactForm();
    initializeNewsletterForm();
    initializeCustomCursor();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Prevent right-click on images (optional)
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations
const debouncedHandleScroll = debounce(handleScroll, 10);
window.addEventListener('scroll', debouncedHandleScroll);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Service Worker Registration (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}