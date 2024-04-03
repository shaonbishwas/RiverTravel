// First slider
const prevBtnFirst = document.querySelector('.prevBtn2.first');
const nextBtnFirst = document.querySelector('.nextBtn2.first');
const slidesFirst = document.querySelector('.slides2.first');
const slideWidthFirst = document.querySelector('.slide2.first').offsetWidth;
const dotsFirst = document.querySelectorAll('.dot2.first');

let currentIndexFirst = 0;
const totalslidesFirst = slidesFirst.children.length;

prevBtnFirst.addEventListener('click', () => {
  currentIndexFirst = (currentIndexFirst - 1 + totalslidesFirst) % totalslidesFirst;
  moveSliderFirst();
});

nextBtnFirst.addEventListener('click', () => {
  currentIndexFirst = (currentIndexFirst + 1) % totalslidesFirst;
  moveSliderFirst();
});

dotsFirst.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndexFirst = index;
    moveSliderFirst();
  });
});

function moveSliderFirst() {
  slidesFirst.style.transition = 'transform 0.5s ease';
  slidesFirst.style.transform = `translateX(-${currentIndexFirst * slideWidthFirst}px)`;
  updateDotsFirst();
}

function updateDotsFirst() {
  dotsFirst.forEach((dot, index) => {
    if (index === currentIndexFirst) {
      dot.classList.add('active_slider2');
    } else {
      dot.classList.remove('active_slider2');
    }
  });
}

slidesFirst.addEventListener('transitionend', () => {
  slidesFirst.style.transition = 'none';
});

// Second slider
const prevBtnSecond = document.querySelector('.prevBtn2.second');
const nextBtnSecond = document.querySelector('.nextBtn2.second');
const slidesSecond = document.querySelector('.slides2.second');
const slideWidthSecond = document.querySelector('.slide2.second').offsetWidth;
const dotsSecond = document.querySelectorAll('.dot2.second');

let currentIndexSecond = 0;
const totalslidesSecond = slidesSecond.children.length;

prevBtnSecond.addEventListener('click', () => {
  currentIndexSecond = (currentIndexSecond - 1 + totalslidesSecond) % totalslidesSecond;
  moveSliderSecond();
});

nextBtnSecond.addEventListener('click', () => {
  currentIndexSecond = (currentIndexSecond + 1) % totalslidesSecond;
  moveSliderSecond();
});

dotsSecond.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndexSecond = index;
    moveSliderSecond();
  });
});

function moveSliderSecond() {
  slidesSecond.style.transition = 'transform 0.5s ease';
  slidesSecond.style.transform = `translateX(-${currentIndexSecond * slideWidthSecond}px)`;
  updateDotsSecond();
}

function updateDotsSecond() {
  dotsSecond.forEach((dot, index) => {
    if (index === currentIndexSecond) {
      dot.classList.add('active_slider2');
    } else {
      dot.classList.remove('active_slider2');
    }
  });
}

slidesSecond.addEventListener('transitionend', () => {
  slidesSecond.style.transition = 'none';
});
