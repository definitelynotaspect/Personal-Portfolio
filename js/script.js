document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const profileImg = document.querySelector('.profile-img');

    // Start in light mode on first load, then persist user choice after toggle
    const currentTheme = 'light';
    body.classList.add('light-mode');
    themeToggle.classList.add('active');
    profileImg.src = profileImg.dataset.lightSrc;
    localStorage.setItem('theme', 'light');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        themeToggle.classList.toggle('active');

        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            profileImg.src = profileImg.dataset.lightSrc;
        } else {
            localStorage.setItem('theme', 'dark');
            profileImg.src = profileImg.dataset.darkSrc;
        }
    });

    // Hover image swap for profile (different images for light and dark mode)
    profileImg.addEventListener('mouseenter', () => {
        profileImg.dataset.prevSrc = profileImg.src;
        if (body.classList.contains('light-mode')) {
            profileImg.src = profileImg.dataset.hoverSrc;
        } else {
            profileImg.src = profileImg.dataset.darkHoverSrc;
        }
    });

    profileImg.addEventListener('mouseleave', () => {
        if (body.classList.contains('light-mode')) {
            profileImg.src = profileImg.dataset.lightSrc;
        } else {
            profileImg.src = profileImg.dataset.darkSrc;
        }
    });

    // Gallery scroll functionality
    const galleryScroll = document.querySelector('.gallery-scroll');
    const navNext = document.querySelector('.nav-next');
    const navPrev = document.querySelector('.nav-prev');

    navNext.addEventListener('click', () => {
        galleryScroll.scrollBy({ left: 200, behavior: 'smooth' });
    });

    navPrev.addEventListener('click', () => {
        galleryScroll.scrollBy({ left: -200, behavior: 'smooth' });
    });

    // Drag to scroll for gallery
    let isDown = false;
    let startX;
    let scrollLeft;

    galleryScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        galleryScroll.classList.add('active');
        startX = e.pageX - galleryScroll.offsetLeft;
        scrollLeft = galleryScroll.scrollLeft;
    });

    galleryScroll.addEventListener('mouseleave', () => {
        isDown = false;
        galleryScroll.classList.remove('active');
    });

    galleryScroll.addEventListener('mouseup', () => {
        isDown = false;
        galleryScroll.classList.remove('active');
    });

    galleryScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - galleryScroll.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        galleryScroll.scrollLeft = scrollLeft - walk;
    });

    // Scroll reveal animation
    const scrollRevealElements = document.querySelectorAll('.card, header, .tech-category, .bottom-grid');
    scrollRevealElements.forEach(el => el.classList.add('fade-in'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.15,
    });

    scrollRevealElements.forEach(el => revealObserver.observe(el));
});
