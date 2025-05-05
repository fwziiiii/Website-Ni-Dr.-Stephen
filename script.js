function revealOnScroll() {
    // For the animation everytime magscroll, dili apil ang footer ug navigation bar
    const elements = document.querySelectorAll('body *:not(nav):not(footer):not(nav *):not(footer *)');

    elements.forEach(el => {
        el.classList.add('reveal-on-scroll');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(element => {
        observer.observe(element);
    });
    }

    document.addEventListener('DOMContentLoaded', () => {
      revealOnScroll();
    });

    // For dropdown buttons
    function toggleDropdown() {
        const menuButton = document.querySelector('.menu-btn');
        const dropdown = document.querySelector('.dropdown');

        menuButton.classList.toggle('open');
        dropdown.classList.toggle('open');

        if (menuButton.classList.contains('open')) {
            menuButton.innerHTML = '&times;';
        } else {
             menuButton.innerHTML = '&#61;';
        }
    }

    const images = [
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
        'Media/bobomatalino.jpg',
    ];
    
    let currentPage = 0;
    const itemsPerPage = 8;
    
    function renderImages() {
        const photoBox = document.getElementById('photoBox');
        photoBox.innerHTML = '';
    
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;
        const pageImages = images.slice(start, end);
    
        pageImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            photoBox.appendChild(img);
        });
    }
    
    function nextPage() {
        if ((currentPage + 1) * itemsPerPage < images.length) {
            currentPage++;
            renderImages();
        }
    }
    
    function previousPage() {
        if (currentPage > 0) {
            currentPage--;
            renderImages();
        }
    }
    
    // Load the first page when the site opens
    document.addEventListener('DOMContentLoaded', renderImages);