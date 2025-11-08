// Console Easter Egg 🥚
console.log(`%c
   ╔════════════════════════════════════════════════╗
   ║                                                ║
   ║                (   )  )  )                     ║
   ║                 ) (  (  (                      ║
   ║                (   )  )  )                     ║
   ║               _____________                    ║
   ║              <_____________> ___               ║
   ║              |             |/ _  \\             ║
   ║              |               | | |             ║
   ║              |               |_| |             ║
   ║              |   FUEL FOR   ____/              ║
   ║              |    CODING   |                   ║
   ║              |_____________|                   ║
   ║                                                ║
   ║   "Code and jokes are similar - if you have    ║
   ║    to explain them, they're probably bad."     ║
   ║                                                ║
   ║   I'm fueled by coffee, powered by curiosity   ║
   ║   Hope you like coffee like me...              ║
   ║                                                ║
   ║   well done finding my hidden easter egg!      ║
   ║                                                ║
   ╚════════════════════════════════════════════════╝
`, 'color: #60a5fa; font-weight: bold;');

document.addEventListener('DOMContentLoaded', function() {
    // Theme Management
    const themeSystem = {
        init() {
            this.themeToggle = document.getElementById('themeToggle');
            this.themeDropdown = document.getElementById('themeDropdown');
            this.themeIcon = document.getElementById('themeIcon');
            
            // Mobile theme elements
            this.mobileThemeToggle = document.getElementById('mobileThemeToggle');
            this.mobileThemeDropdown = document.getElementById('mobileThemeDropdown');
            this.mobileThemeIcon = document.getElementById('mobileThemeIcon');
            
            this.themeOptions = document.querySelectorAll('.theme-option');
            
            this.currentTheme = localStorage.getItem('theme') || 'system';
            this.setupEventListeners();
            this.applyTheme(this.currentTheme);
            this.updateActiveOption();
        },

        setupEventListeners() {
            // Desktop theme toggle
            if (this.themeToggle && this.themeDropdown) {
                this.themeToggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleDropdown(this.themeDropdown);
                });
            }

            // Mobile theme toggle
            if (this.mobileThemeToggle && this.mobileThemeDropdown) {
                this.mobileThemeToggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleDropdown(this.mobileThemeDropdown);
                });
            }

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.theme-toggle')) {
                    this.closeAllDropdowns();
                }
            });

            // System theme change listener
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                if (this.currentTheme === 'system') {
                    this.applyTheme('system');
                    this.updateThemeIcon('system');
                }
            });

            // Theme option selection
            this.themeOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const theme = option.dataset.theme;
                    this.setTheme(theme);
                    this.themeDropdown.classList.remove('show');
                });
            });

            // Listen for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                if (this.currentTheme === 'system') {
                    this.applyTheme('system');
                }
            });
        },

        setTheme(theme) {
            this.currentTheme = theme;
            localStorage.setItem('theme', theme);
            this.applyTheme(theme);
            this.updateActiveOption();
        },

        applyTheme(theme) {
            const root = document.documentElement;
            
            // Handle CSS properties and dark mode
            if (theme === 'system') {
                root.removeAttribute('data-theme');
                // For system theme, check the actual preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                root.classList.toggle('dark', prefersDark);
            } else {
                root.setAttribute('data-theme', theme);
                // Toggle dark class
                root.classList.toggle('dark', theme === 'dark');
            }
            
            this.updateThemeIcon(theme);
        },

        updateThemeIcon(theme) {
            const icons = {
                system: `<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v12a6 6 0 0 0 0-12z"/>`,
                light: `<path d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287Q23 11.575 23 12t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05 4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287Z"/>`,
                dark: `<path d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025q.337.025.662.075q-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613q1.15-.612 1.875-1.637q.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Z"/>`
            };
            
            // For system theme, show the appropriate icon based on actual system preference
            let iconToShow = theme;
            if (theme === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                iconToShow = prefersDark ? 'dark' : 'light';
            }
            
            this.themeIcon.innerHTML = icons[iconToShow] || icons.system;
            
            // Add smooth transition
            this.themeIcon.classList.add('transition-transform', 'duration-200', 'ease-in-out');
            this.themeIcon.classList.add('scale-90');
            setTimeout(() => {
                this.themeIcon.classList.remove('scale-90');
                this.themeIcon.classList.add('scale-100');
            }, 100);
        },

        toggleDropdown(dropdown) {
            const isOpen = dropdown.classList.contains('opacity-100');
            this.closeAllDropdowns();
            
            if (!isOpen) {
                dropdown.classList.remove('opacity-0', 'invisible', '-translate-y-2');
                dropdown.classList.add('opacity-100', 'visible', 'translate-y-0');
            }
        },

        closeAllDropdowns() {
            [this.themeDropdown, this.mobileThemeDropdown].forEach(dropdown => {
                if (dropdown) {
                    dropdown.classList.remove('opacity-100', 'visible', 'translate-y-0');
                    dropdown.classList.add('opacity-0', 'invisible', '-translate-y-2');
                }
            });
        },

        updateActiveOption() {
            this.themeOptions.forEach(option => {
                const checkIcon = option.querySelector('svg:last-child');
                const isActive = option.dataset.theme === this.currentTheme;
                
                if (checkIcon) {
                    checkIcon.classList.toggle('opacity-100', isActive);
                    checkIcon.classList.toggle('opacity-0', !isActive);
                }
            });
        }
    };

    // Initialize theme system
    themeSystem.init();

    // Mobile Menu System
    const mobileMenu = {
        init() {
            this.mobileToggle = document.getElementById('mobileMenuToggle');
            this.mobileMenu = document.getElementById('mobileMenu');
            this.hamburgerIcon = document.getElementById('hamburgerIcon');
            this.closeIcon = document.getElementById('closeIcon');
            
            if (this.mobileToggle && this.mobileMenu) {
                this.setupEventListeners();
            }
        },

        setupEventListeners() {
            // Toggle mobile menu
            this.mobileToggle.addEventListener('click', () => {
                this.toggleMenu();
            });

            // Close menu when clicking on a link
            const menuLinks = this.mobileMenu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMenu();
                });
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isMenuOpen()) {
                    this.closeMenu();
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (this.isMenuOpen() && !this.mobileToggle.contains(e.target) && !this.mobileMenu.contains(e.target)) {
                    this.closeMenu();
                }
            });
        },

        toggleMenu() {
            if (this.isMenuOpen()) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
        },

        openMenu() {
            this.mobileMenu.classList.remove('hidden');
            this.mobileMenu.classList.add('mobile-menu-enter');
            this.hamburgerIcon.classList.add('hidden');
            this.closeIcon.classList.remove('hidden');
            
            // Prevent body scroll
            document.body.classList.add('overflow-hidden');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                this.mobileMenu.classList.remove('mobile-menu-enter');
            }, 300);
        },

        closeMenu() {
            this.mobileMenu.classList.add('mobile-menu-exit');
            this.hamburgerIcon.classList.remove('hidden');
            this.closeIcon.classList.add('hidden');
            
            // Restore body scroll
            document.body.classList.remove('overflow-hidden');
            
            // Hide menu after animation
            setTimeout(() => {
                this.mobileMenu.classList.add('hidden');
                this.mobileMenu.classList.remove('mobile-menu-exit');
            }, 300);
        },

        isMenuOpen() {
            return !this.mobileMenu.classList.contains('hidden');
        }
    };

    // Initialize mobile menu
    mobileMenu.init();

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Calculate years of experience at Sphera (since Oct 2018)
    function calculateSphereYears() {
        const startDate = new Date(2018, 9); // October 2018 (month is 0-indexed)
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - startDate);
        const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
        return diffYears;
    }

    // Calculate years in UK (since 2018, same as Sphera start)
    function calculateUKYears() {
        const startDate = new Date(2018, 0); // January 2018 (approximate UK move)
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - startDate);
        const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
        return diffYears;
    }

    // Update Sphera experience years
    const spheraYears = calculateSphereYears();
    const spheraYearsElement = document.getElementById('spheraYears');
    if (spheraYearsElement) {
        spheraYearsElement.textContent = `${spheraYears}+ years`;
    }

    // Update UK years
    const ukYears = calculateUKYears();
    const ukYearsElement = document.getElementById('ukYears');
    if (ukYearsElement) {
        ukYearsElement.textContent = ukYears;
    }

    // Calculate current age (born 25/11/1989)
    function calculateAge() {
        const birthDate = new Date(1989, 10, 25); // November 25, 1989 (month is 0-indexed)
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        // If birthday hasn't occurred this year, subtract 1
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }

    // Update age if element exists
    const currentAge = calculateAge();
    const ageElement = document.getElementById('currentAge');
    if (ageElement) {
        ageElement.textContent = currentAge;
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active state to navigation based on scroll position
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-slate-300');
            
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.remove('text-slate-300');
                link.classList.add('text-white');
            }
        });
    }

    // Listen for scroll events to update active navigation
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call to set active state
    updateActiveNav();

    // Add intersection observer for project cards animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-5');
                entry.target.classList.add('opacity-100', 'translate-y-0');
            }
        });
    }, observerOptions);

    // Observe project cards for animation
    const projectCards = document.querySelectorAll('#projects article');
    projectCards.forEach(card => {
        card.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-500', 'ease-out');
        observer.observe(card);
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Press 'H' to go to top
        if (e.key === 'h' || e.key === 'H') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Press 'P' to go to projects
        if (e.key === 'p' || e.key === 'P') {
            document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Press 'E' to go to experience
        if (e.key === 'e' || e.key === 'E') {
            document.getElementById('experience')?.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Press 'L' to go to links
        if (e.key === 'l' || e.key === 'L') {
            document.getElementById('links')?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Add subtle parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        const heroSection = document.querySelector('main section:first-child');
        
        if (header && heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation
    document.body.classList.add('opacity-0', 'transition-opacity', 'duration-500', 'ease-in-out');
    
    window.addEventListener('load', function() {
        document.body.classList.remove('opacity-0');
        document.body.classList.add('opacity-100');
    });

    // Flip Card Functionality
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        let isFlipped = false;
        let flipBackTimeout = null;
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear any pending flip-back timeout
            if (flipBackTimeout) {
                clearTimeout(flipBackTimeout);
                flipBackTimeout = null;
            }
            
            isFlipped = !isFlipped;
            
            if (isFlipped) {
                card.classList.add('flipped');
            } else {
                card.classList.remove('flipped');
            }
        });

        card.addEventListener('mouseleave', function() {
            if (isFlipped) {
                // Delay the flip-back by 1 second to prevent weird behavior
                flipBackTimeout = setTimeout(() => {
                    isFlipped = false;
                    card.classList.remove('flipped');
                    flipBackTimeout = null;
                }, 1000);
            }
        });

        // Cancel flip-back if mouse re-enters the card
        card.addEventListener('mouseenter', function() {
            if (flipBackTimeout) {
                clearTimeout(flipBackTimeout);
                flipBackTimeout = null;
            }
        });
    });
});

