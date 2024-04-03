const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').offsetWidth;
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.children.length - 1) {
    currentIndex++;
    moveSlider();
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    moveSlider();
  });
});

function moveSlider() {
  slides.style.transition = 'transform 0.5s ease';
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active_slider');
    } else {
      dot.classList.remove('active_slider');
    }
  });
}

slides.addEventListener('transitionend', () => {
  slides.style.transition = 'none';
});