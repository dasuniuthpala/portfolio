document.addEventListener("DOMContentLoaded", () => {
  const educationLogos = document.querySelectorAll(".education-logo");
  const detailBoxes = document.querySelectorAll(".education-details");

  educationLogos.forEach((logo, index) => {
    logo.addEventListener("click", () => {
      // Hide all detail boxes
      detailBoxes.forEach((box) => {
        box.classList.add("opacity-0", "scale-95", "pointer-events-none");
        box.classList.remove("opacity-100", "scale-100", "pointer-events-auto");
      });

      // Show the selected one
      detailBoxes[index].classList.remove("opacity-0", "scale-95", "pointer-events-none");
      detailBoxes[index].classList.add("opacity-100", "scale-100", "pointer-events-auto");
    });
  });

  // Scroll-reveal effect
  window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("animate-fade");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      skillCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Contact section animation on mouseenter
  const contactSection = document.querySelector('.contact-section');
  const contactPanels = document.querySelectorAll('.contact-form-panel, .contact-info-panel');
  if (contactSection) {
    function triggerContactAnimation() {
      contactSection.classList.remove('fade-in-up', 'animate');
      contactPanels.forEach(panel => {
        panel.classList.remove('fade-in-up-stagger', 'animate');
      });
      // Force reflow to restart animation
      void contactSection.offsetWidth;
      contactSection.classList.add('fade-in-up', 'animate');
      contactPanels.forEach((panel, idx) => {
        panel.classList.add('fade-in-up-stagger', 'animate');
        panel.style.animationDelay = (0.4 + idx * 0.2) + 's';
      });
    }
    contactSection.addEventListener('mouseenter', triggerContactAnimation);
  }

  // Project filter logic
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (projectFilterBtns.length) {
    projectFilterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        projectFilterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        projectCards.forEach(card => {
          if (filter === 'web') {
            card.style.display = card.getAttribute('data-category') === 'web' ? '' : 'none';
          } else {
            card.style.display = card.getAttribute('data-category') === filter ? '' : 'none';
          }
        });
      });
    });
  }
});

function showDetails(type) {
    // Hide both details first
    document.getElementById('school-details').classList.add('hidden');
    document.getElementById('uni-details').classList.add('hidden');

    // Show the selected one
    if (type === 'school') {
        document.getElementById('school-details').classList.remove('hidden');
    } else if (type === 'uni') {
        document.getElementById('uni-details').classList.remove('hidden');
    }
}
