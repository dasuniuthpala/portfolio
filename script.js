document.addEventListener("DOMContentLoaded", () => {
  // Education section: Toggle detail boxes on logo click
  const educationLogos = document.querySelectorAll(".group.cursor-pointer");
  const detailBoxes = document.querySelectorAll("#school-details, #uni-details");

  educationLogos.forEach((logo, index) => {
    logo.addEventListener("click", () => {
      // Hide all detail boxes
      detailBoxes.forEach((box) => {
        box.classList.add("hidden");
      });

      // Show the selected one
      detailBoxes[index].classList.remove("hidden");
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

  // Skills filter logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
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
        // Remove active class from all buttons
        projectFilterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        projectCards.forEach(card => {
          // Show only cards matching the selected filter
          if (card.getAttribute('data-category') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});

// Function to show education details (for onclick in HTML)
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