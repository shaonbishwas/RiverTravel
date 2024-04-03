let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let previous = document.getElementById('previous')
let next = document.getElementById('next')

let active = 0;
let lengthItems = items.length -1;

next.onclick = function(){
    if( active + 1 > lengthItems){
        active = 0;
    } else{
        active = active + 1;
    }
    reloadSlider();
}

previous.onclick = function(){
    if (active - 1 < 0){
        active = lengthItems;
    } else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()},3000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()},3000);
}

dots.forEach ((li, key) => {
    li.addEventListener('click' , function(){
        active = key;
        reloadSlider();
    })
})


const slider = document.querySelector('.slider_div');

const leftArrow = document.querySelector('.left_button');
const rightArrow = document.querySelector('.right_button');

var sectionIndex = 0;

leftArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex > 0)? sectionIndex - 1 : 0;
  slider.style.transform ='translate(' + (sectionIndex) * -33.33 + '%)';
})

rightArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex < 2)? sectionIndex + 1 : 2;
  slider.style.transform ='translate(' + (sectionIndex) * -33.33 + '%)';
})


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
    document.getElementById("droppara1").classList.toggle("show1");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns1 = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns1.length; i++) {
        var openDropdown1 = dropdowns1[i];
        if (openDropdown1.classList.contains('show1')) {
          openDropdown1.classList.remove('show1');
        }
      }
    }
  }

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  function myFunction2() {
    document.getElementById("droppara2").classList.toggle("show2");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns2 = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns2.length; i++) {
        var openDropdown2 = dropdowns2[i];
        if (openDropdown2.classList.contains('show2')) {
          openDropdown2.classList.remove('show2');
        }
      }
    }
  }


  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  function myFunction3() {
    document.getElementById("droppara3").classList.toggle("show3");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn3')) {
      var dropdowns3 = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns3.length; i++) {
        var openDropdown3 = dropdowns3[i];
        if (openDropdown3.classList.contains('show3')) {
          openDropdown3.classList.remove('show3');
        }
      }
    }
  }


  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  function myFunction4() {
    document.getElementById("droppara4").classList.toggle("show4");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn4')) {
      var dropdowns4 = document.getElementsByClassName("dropdown-content4");
      var i;
      for (i = 0; i < dropdowns4.length; i++) {
        var openDropdown4 = dropdowns4[i];
        if (openDropdown4.classList.contains('show4')) {
          openDropdown4.classList.remove('show4');
        }
      }
    }
  }