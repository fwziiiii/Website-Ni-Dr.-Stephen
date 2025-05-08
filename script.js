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
        'Media/pic4.jpg',
        'Media/pic1.jpg',
        'Media/pic2.jpg',
        'Media/pic3.jpg',
        'Media/funda.jpg',
        'Media/keven.jpg',
        'Media/Stephen.jpg',
        'Media/devibaryawn.jpg',
        'Media/bobomatalino.jpg',
        'Media/Belardo.jpg',
        'Media/Devibar.jpg',
        'Media/Fawzan.png',
        'Media/devs.jpg',
        'Media/Gandon.jpg',
        'Media/pipino.jpg',
        'Media/logo.png'
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
          const photoDiv = document.createElement('div');
          photoDiv.className = 'photo';
      
          const bgDiv = document.createElement('div');
          bgDiv.className = 'photo-background';
          bgDiv.style.backgroundImage = `url(${src})`;
      
          photoDiv.appendChild(bgDiv);
          photoBox.appendChild(photoDiv);
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
      
      document.addEventListener('DOMContentLoaded', renderImages);
