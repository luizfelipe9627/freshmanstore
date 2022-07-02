document.querySelector(".menu-mobile").addEventListener("click", function () {
  if (document.querySelector(".menu").style.opacity == "100") {
    document.querySelector(".menu").style.opacity = "0";
    document.querySelector(".menu-mobile").src = "https://freshmanstore.github.io/freshmanstore/assets/image/menu-mobile.svg";
  } else {
    document.querySelector(".menu").style.opacity = "100";
    document.querySelector(".menu-mobile").src = "https://freshmanstore.github.io/freshmanstore/assets/image/fechar-menu.svg";
  }
});

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
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderImgWidth = document.querySelector('.slider-img').clientWidth;
  let newMargin = (currentSlide * sliderImgWidth);
  document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 2500);