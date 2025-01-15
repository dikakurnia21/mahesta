// Menu toggle untuk navbar
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu?.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar?.classList.toggle('active');
});

// Theme toggler untuk mengganti warna tema
let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn?.addEventListener('click', () => {
  themeToggler?.classList.toggle('active');
});

// Reset kelas saat scroll
window.addEventListener('scroll', () => {
  menu?.classList.remove('fa-times');
  navbar?.classList.remove('active');
  themeToggler?.classList.remove('active');
});

// Theme toggler button event
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let color = btn.getAttribute('data-color'); // Gunakan data attribute
    if (color) {
      document.documentElement.style.setProperty('--main-color', color);
    }
  });
});

// Inisialisasi Swiper untuk home slider
new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Inisialisasi Swiper untuk review slider
new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: { slidesPerView: 1 },
    700: { slidesPerView: 2 },
    1050: { slidesPerView: 3 },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
