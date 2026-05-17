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
    dot.setAttribute("aria-label", `${index + 1}번째 슬라이드 보기`);

    dot.addEventListener("click", () => {
      showSlide(index, track, slides, dotsWrap);
      startAutoSlide(track, slides, dotsWrap);
    });

    dotsWrap.appendChild(dot);
  });

  hero.addEventListener("mouseenter", () => clearInterval(autoTimer));
  hero.addEventListener("mouseleave", () =>
    startAutoSlide(track, slides, dotsWrap),
  );

  showSlide(0, track, slides, dotsWrap);
  startAutoSlide(track, slides, dotsWrap);
}

function showSlide(index, track, slides, dotsWrap) {
  const dots = dotsWrap.querySelectorAll(".hero__dot");

  currentIndex = index;
  track.style.transform = `translate3d(${-currentIndex * 100}%, 0, 0)`;

  slides.forEach((slide, i) => {
    const isActive = i === currentIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  dots.forEach((dot, i) => {
    const isActive = i === currentIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function startAutoSlide(track, slides, dotsWrap) {
  clearInterval(autoTimer);

  autoTimer = setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex, track, slides, dotsWrap);
  }, 3500);
}
