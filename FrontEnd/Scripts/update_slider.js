const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').offsetWidth;
const dots = document.querySelectorAll('.dot');

let currentIndexUpd = 0;
const totalSlides = slides.children.length;

prevBtn.addEventListener('click', () => {
  currentIndexUpd = (currentIndexUpd - 1 + totalSlides) % totalSlides;
  moveSlider();
  updateColorsPrev();
});

nextBtn.addEventListener('click', () => {
  currentIndexUpd = (currentIndexUpd + 1) % totalSlides;
  moveSlider();
  updateColorsNext()
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndexUpd = index;
    moveSlider();
  });
});

function moveSlider() {
  slides.style.transition = 'transform 0.5s ease';
  slides.style.transform = `translateX(-${currentIndexUpd * slideWidth}px)`;
  updateDots();
}

function updateColorsPrev(){
    // prevBtn.classList.add("slider_btn_dark");
    // nextBtn.classList.remove("slider_btn_light");

    if(!prevBtn.classList.contains("slider_btn_dark")){
        // that means it has the dark now it should be become light
        prevBtn.classList.remove("slider_btn_light");
        prevBtn.classList.add("slider_btn_dark");

    }else if(nextBtn.classList.contains("slider_btn_dark") && prevBtn.classList.contains("slider_btn_dark")){
        // that means the nex is in dark and also the prev is in dark
        nextBtn.classList.remove("slider_btn_dark")
        
    }

    

    // if(prevBtn.classList.contains("slider_btn_dark")){
    //     // that means it has the dark now it should be become light
    //     prevBtn.classList.remove("slider_btn_dark");
    //     prevBtn.classList.add("slider_btn_light");
    // }else{
    //     // that means the dark is not now and it should be become dark
    //     prevBtn.classList.remove("slider_btn_light");
    //     prevBtn.classList.add("slider_btn_dark");
    // }
    
    // prevBtn.classList.add("slider_btn_dark");
    // nextBtn.classList.remove("slider_btn_dark")
    // nextBtn.classList.add("slider_btn_light")
}
function updateColorsNext(){
    if(!nextBtn.classList.contains("slider_btn_dark")){
        // that means it has the dark now it should be become light
        nextBtn.classList.remove("slider_btn_light");
        nextBtn.classList.add("slider_btn_dark");
    }else if(nextBtn.classList.contains("slider_btn_dark") && prevBtn.classList.contains("slider_btn_dark")){
        // that means the nex is in dark and also the prev is in dark
        prevBtn.classList.remove("slider_btn_dark")
        
    }


//    nextBtn.classList.add("slider_btn_dark");
//    prevBtn.classList.remove("slider_btn_dark")
//    prevBtn.classList.add("slider_btn_light")
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndexUpd) {
      dot.classList.add('active_slider');
    } else {
      dot.classList.remove('active_slider');
    }
  });
}

slides.addEventListener('transitionend', () => {
  slides.style.transition = 'none';
});


