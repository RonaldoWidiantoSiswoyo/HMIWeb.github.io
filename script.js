//Javascript untuk responsive menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//Javascript untuk video slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// JAVASCRIPT UNTUK STICKY BAR NYA YAPS
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 40) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// JAVASCRIPT UNTUK PEMUTAR MUSIK YA MAS DODO!!!
var musik = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "image/pause.png";
  } else {
    mySong.pause();
    icon.src = "image/play.png";
  }
};

// UNTUK FAMILY CARE
var thumb = document.getElementsByClassName("thumb");
var slide = document.getElementById("slide");

thumb[0].onclick = function () {
  slide.style.transform = "translateY(100px)";
};

thumb[1].onclick = function () {
  slide.style.transform = "translateY(-630px)";
};

thumb[2].onclick = function () {
  slide.style.transform = "translateY(-1360px)";
};

thumb[3].onclick = function () {
  slide.style.transform = "translateY(-2090px)";
};

thumb[4].onclick = function () {
  slide.style.transform = "translateY(-2820px)";
};

thumb[5].onclick = function () {
  slide.style.transform = "translateY(-3550px)";
};

thumb[6].onclick = function () {
  slide.style.transform = "translateY(-4280px)";
};

thumb[7].onclick = function () {
  slide.style.transform = "translateY(-5010px)";
};
