let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let formClose = document.querySelector('#form-close');
let current = 1,
  playPauseBool = true,
  interval;
var myimage = document.getElementById("image");
myimage.onmouseover = function(){
  "use strict"
  myimage.innerHTML = "./img/coming8";
}
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });
  const changeSlides = () => {
    const slideList = document.querySelectorAll(".slide");
    const slides = Array.from(slideList);
    console.log(current);
    if (current > slides.length) {
      current = 1;
    } else if (current === 0) {
      current = slides.length;
    }
  
    slides.forEach(slide => {
      if (slide.classList[1].split("-")[1] * 1 === current) {
        slide.style.cssText = "visibility: visible; opacity: 1";
      } else {
        slide.style.cssText = "visibility: hidden; opacity: 0";
      }
    });
  };
  const playPause = () => {
    if (playPauseBool) {
      interval = setInterval(() => {
        current++;
        changeSlides();
      }, 5000);
      playPauseBool = false;
    } else {
      clearInterval(interval);
      playPauseBool = true;
    }
    arrowVisibility();
    changePlayPause();
  };
  changeSlides();
  playPause();


function imagechange(){
  document.getElementById("image").innerHTML= "./img/coming8";
}








