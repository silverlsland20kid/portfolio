let currentIndex = 0;
let autoTimer;

function initSlider() {
  const hero = document.querySelector(".hero");
  const track = document.querySelector(".hero__track");
  const slides = document.querySelectorAll(".hero__slide");
  const dotsWrap = document.querySelector(".hero__dots");

  if (!hero || !track || !slides.length || !dotsWrap) return;

  dotsWrap.innerHTML = "";

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero__dot";

    dot.addEventListener("click", () => {
      showSlide(index, track, slides, dotsWrap);
      startAutoSlide(track, slides, dotsWrap);
    });

    dotsWrap.appendChild(dot);
  });

  showSlide(0, track, slides, dotsWrap);
  startAutoSlide(track, slides, dotsWrap);
}

function showSlide(index, track, slides, dotsWrap) {
  const dots = dotsWrap.querySelectorAll(".hero__dot");

  currentIndex = index;

  track.style.transform = `translate3d(${-currentIndex * 100}%, 0, 0)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("is-active", i === currentIndex);
  });
}

function startAutoSlide(track, slides, dotsWrap) {
  clearInterval(autoTimer);

  autoTimer = setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex, track, slides, dotsWrap);
  }, 3500);
}
