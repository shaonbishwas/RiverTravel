const prevBtn2 = document.querySelector('.prevBtn2');
const nextBtn2 = document.querySelector('.nextBtn2');
const slides2 = document.querySelector('.slides2');
const slideWidth2 = document.querySelector('.slide2').offsetWidth;
const dots = document.querySelectorAll('.dot2');

let currentIndex2 = 0;
const totalslides2 = slides2.children.length;

prevBtn2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 - 1 + totalslides2) % totalslides2;
  moveSlider();
  updateColorsPrev();
});

nextBtn2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 + 1) % totalslides2;
  moveSlider();
  updateColorsNext()
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex2 = index;
    moveSlider();
  });
});

function moveSlider() {
  slides2.style.transition = 'transform 0.5s ease';
  slides2.style.transform = `translateX(-${currentIndex2 * slideWidth2}px)`;
  updateDots();
}

function updateColorsPrev(){
    // prevBtn.classList.add("slider_btn_dark2");
    // nextBtn.classList.remove("slider_btn_light2");

    if(!prevBtn2.classList.contains("slider_btn_dark2")){
        // that means it has the dark now it should be become light
        prevBtn2.classList.remove("slider_btn_light2");
        prevBtn.classList.add("slider_btn_dark2");

    }else if(nextBtn2.classList.contains("slider_btn_dark2") && prevBtn.classList.contains("slider_btn_dark2")){
        // that means the nex is in dark and also the prev is in dark
        nextBtn2.classList.remove("slider_btn_dark2")
        
    }

    

    // if(prevBtn.classList.contains("slider_btn_dark2")){
    //     // that means it has the dark now it should be become light
    //     prevBtn.classList.remove("slider_btn_dark2");
    //     prevBtn.classList.add("slider_btn_light2");
    // }else{
    //     // that means the dark is not now and it should be become dark
    //     prevBtn.classList.remove("slider_btn_light2");
    //     prevBtn.classList.add("slider_btn_dark2");
    // }
    
    // prevBtn.classList.add("slider_btn_dark2");
    // nextBtn.classList.remove("slider_btn_dark2")
    // nextBtn.classList.add("slider_btn_light2")
}
function updateColorsNext(){
    if(!nextBtn2.classList.contains("slider_btn_dark2")){
        // that means it has the dark now it should be become light
        nextBtn2.classList.remove("slider_btn_light2");
        nextBtn2.classList.add("slider_btn_dark2");
    }else if(nextBtn2.classList.contains("slider_btn_dark2") && prevBtn.classList.contains("slider_btn_dark2")){
        // that means the nex is in dark and also the prev is in dark
        prevBtn2.classList.remove("slider_btn_dark2")
        
    }


//    nextBtn.classList.add("slider_btn_dark2");
//    prevBtn.classList.remove("slider_btn_dark2")
//    prevBtn.classList.add("slider_btn_light2")
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex2) {
      dot.classList.add('active_slider2');
    } else {
      dot.classList.remove('active_slider2');
    }
  });
}

slides2.addEventListener('transitionend', () => {
  slides2.style.transition = 'none';
});


