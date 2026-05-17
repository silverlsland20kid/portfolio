function initMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-menu__close");
  const menuLinks = menu?.querySelectorAll("a");

  if (!menuBtn || !menu) return;

  const openMenu = () => {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("is-menu-open");
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-menu-open");
  };

  menuBtn.setAttribute("aria-expanded", "false");

  menuBtn.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);

  menuLinks?.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initScrollEffect();
  initSlider();

  if (window.gsap && window.ScrollTrigger) {
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
        delay: i * 0.1,
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
  }
});
