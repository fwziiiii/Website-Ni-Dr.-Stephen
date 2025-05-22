function revealOnScroll() {
    const elements = document.querySelectorAll(
        '.main-page .section-box, .main-content *, .AboutUs-part, .AboutUs-part *, .AboutUs-part2, .AboutUs-part2 *, .btn-primary, .other-page *'
    );

    elements.forEach(el => {
        // Exclude the canvas with id 'bubbleCanvas'
        if (el.id !== 'bubbleCanvas') {
            el.classList.add('reveal-on-scroll');
        }
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
        // Exclude canvas#bubbleCanvas from being observed
        if (element.id !== 'bubbleCanvas') {
            observer.observe(element);
        }
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
  box9: ["Media/protectocean.jpg", "Media/savetheocean.jpg", "Media/oceanprotect.jpg"],
  box10: ["Media/phytoplankton.jpg", "Media/phytoplankton.png", "Media/phytoplankton2.png"],
  box11: ["Media/livelihood.jpg", "Media/livelihood2.jpg", "Media/livelihood3.jpg"],
  box12: ["Media/industry.jpg", "Media/maritime.jpeg", "Media/offshore.jpg"],
  box13: ["Media/carbonsink.png", "Media/kelp.jpg", "Media/seagrassmea.jpg", "Media/bluecarbon.png"],
  box14: ["Media/reef1.jpg", "Media/mangroves.png", "Media/mangroves.jpg", "Media/seagrassbeds.jpeg"],
  box15: ["Media/weather.jpg", "Media/weather2.jpg", "Media/oceanclimate.jpg", "Media/agri.jpg"],
  box16: ["Media/Invertebrates.jpg", "Media/Invertebrates2.jpg", "Media/Invertebrates3.jpg"],
  box17: ["Media/fresh.jpg", "Media/water.jpg", "Media/biodiversity.jpeg"],
  box18: ["Media/bee.jpg", "Media/crustaceans.jpg", "Media/mollusks.jpg", "Media/jelly.jpg"],
  box19: ["Media/flies.jpg", "Media/nematodes.jpg", "Media/cephalopods.jpg"],
  box20: ["Media/scientist.jpg", "Media/researchccc.jpg", "Media/fishlol.jpg"],
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



// BUBBLES WEEEE
// const canvas = document.getElementById('bubbleCanvas');
// const ctx = canvas.getContext('2d');

// function resizeCanvas() {
//   canvas.width = document.body.scrollWidth;
//   canvas.height = document.body.scrollHeight;
// }
// window.addEventListener('resize', () => {
//   resizeCanvas();
//   drawAllBubbles(); // Redraw bubbles after resize
// });
// resizeCanvas();

// // Bubble class with realistic appearance
// class Bubble {
//   constructor() {
//     this.x = Math.random() * canvas.width;
//     this.y = Math.random() * canvas.height;
//     this.radius = 15 + Math.random() * 35; // Bigger bubbles
//     this.opacity = 0.1 + Math.random() * 0.2;
//   }

//   draw() {
//   // Create a radial gradient with rainbow-like colors and transparency
//   const gradient = ctx.createRadialGradient(
//     this.x, this.y, this.radius * 0.05,
//     this.x, this.y, this.radius
//   );

//   gradient.addColorStop(1, `rgba(255, 255, 255, ${this.opacity + 0.3})`); // bright center
//   gradient.addColorStop(0.8, `rgba(135, 206, 250, ${this.opacity * 0.7})`); // soft blue
//   gradient.addColorStop(0.7, `rgba(255, 182, 193, ${this.opacity * 0.2})`); // pinkish
//   gradient.addColorStop(0.6, `rgba(144, 238, 144, ${this.opacity * 0.3})`); // light green
//   gradient.addColorStop(0.8, `rgba(255, 255, 224, ${this.opacity * 0.5})`); // pale yellow
//   gradient.addColorStop(0, `rgba(255, 255, 255, 0)`); // transparent edge

//   // Fill the bubble circle with the gradient
//   ctx.beginPath();
//   ctx.fillStyle = gradient;
//   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//   ctx.fill();

//   // Draw a thin white rim around bubble edge (soft, semi-transparent)
//   ctx.beginPath();
//   ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.6})`;
//   ctx.lineWidth = 2;
//   ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
//   ctx.shadowBlur = 6;
//   ctx.arc(this.x, this.y, this.radius - 1, 0, Math.PI * 2);
//   ctx.stroke();

//   // Draw a small white highlight spot (glint) with a soft glow
//   const highlightX = this.x - this.radius * 0.3;
//   const highlightY = this.y - this.radius * 0.3;
//   const highlightRadius = this.radius * 0.15;

//   let highlightGradient = ctx.createRadialGradient(
//     highlightX, highlightY, 0,
//     highlightX, highlightY, highlightRadius
//   );
//   highlightGradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
//   highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

//   ctx.beginPath();
//   ctx.fillStyle = highlightGradient;
//   ctx.arc(highlightX, highlightY, highlightRadius, 0, Math.PI * 2);
//   ctx.fill();
// }
// }

// // Generate many bubbles
// const bubbles = Array.from({ length: 150 }, () => new Bubble());

// // Draw once (static)
// function drawAllBubbles() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   bubbles.forEach(bubble => bubble.draw());
// }

// drawAllBubbles();
