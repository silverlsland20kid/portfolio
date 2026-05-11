function initMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-menu__close");

  if (!menuBtn || !menu) return;

  const openMenu = () => {
    menu.classList.add("is-open");
    document.body.classList.add("is-menu-open");
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
  };

  menuBtn.addEventListener("click", openMenu);

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initScrollEffect();
  initSlider();

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero__title", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out",
  });

  gsap.from(".hero__desc", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "power2.out",
  });

  gsap.utils.toArray(".license-card").forEach((card, i) => {
    gsap.from(card, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: i * 0.1, // 살짝 시간차 (선택)
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true,
      },
    });
  });

  gsap.from(".bus-box", {
    y: 32,
    opacity: 0,
    scale: 0.96,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bus-box",
      start: "top 85%",
      once: true,
    },
  });

  gsap.from(".quick-item", {
    y: 24,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: "power2.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: ".quick-grid",
      start: "top 85%",
      once: true,
    },
  });
});
