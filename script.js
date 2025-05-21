function revealOnScroll() {
    const elements = document.querySelectorAll(
        '.main-page .section-box, .main-content *, .AboutUs-part, .AboutUs-part *, .AboutUs-part2 *, .btn-primary, .other-page *'
    );

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
      

// SLIDE SHOW SCRIPTTT

const slideshows = {
  box1: ["Media/biodiver1.jpg", "Media/biodiver2.jpg", "Media/biodiver3.jpg"],
  box2: ["Media/reef1.jpg", "Media/reef2.jpg", "Media/reef3.jpg"],
  box3: ["Media/polution1.jpg", "Media/polution2.jpg", "Media/polution3.jpg"],
  box4: ["Media/polution1.jpg", "Media/overfishing.jpg", "Media/oilspill.jpg", "Media/polution2.jpg"],
  box5: ["Media/biodiver1.jpg", "Media/biodiversity.jpeg", "Media/biodiversity1.jpg", "Media/biodiver2.jpg"],
  box6: ["Media/biodiversity2.png", "Media/biodiver3.jpg", "Media/biodiversity3.jpg"],
  box7: ["Media/studying.jpg", "Media/medicine.jpg", "Media/scientist.jpg"],
  box8: ["Media/ocean2.jpg", "Media/carboncycle.png", "Media/oceanclimate.jpg"],
  box9: ["Media/protectocean.jpg", "Media/savetheocean.jpg", "Media/oceanprotect.jpg"]
};

for (const [id, images] of Object.entries(slideshows)) {
  let index = 1;
  const box = document.getElementById(id);
  const bgSlide = box.querySelector('.bg-slide');

  function updateBackground() {
    // Fade out
    bgSlide.style.opacity = 0;

    setTimeout(() => {
      // Change image after fade out
      bgSlide.style.backgroundImage = `url('${images[index]}')`;
      index = (index + 1) % images.length;

      // Fade in
      bgSlide.style.opacity = 1;
    }, 800); // Match this to your CSS transition time
  }

  // Initialize
  bgSlide.style.backgroundImage = `url('${images[0]}')`;
  setInterval(updateBackground, 5000);
}

