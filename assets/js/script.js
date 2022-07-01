window.onload = function () {
  document.querySelector(".menu-mobile").addEventListener("click", function () {
    if (document.querySelector(".menu").style.opacity == "100") {
      document.querySelector(".menu").style.opacity = "0";
    } else {
      document.querySelector(".menu").style.opacity = "100";
    }
  });
};


let totalSlides = document.querySelectorAll('.slider-img').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider-width').style.width =  `${sliderWidth * totalSlides}px`;
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;
document.querySelector('.slider-controls').style.width = `${sliderWidth}px`;

function goPrev() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlide++;
  
  if(currentSlide > (totalSlides - 1)) {
    currentSlide = 0
  }
  updateMargin();
}

function updateMargin() {
  let sliderImgWidth = document.querySelector('.slider-img').clientWidth
  let newMargin = (currentSlide * sliderImgWidth);

  document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`
}

// setInterval(goNext, 3000);

