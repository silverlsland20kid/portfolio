function initScrollEffect() {
  const header = document.querySelector(".header");
  const topBtn = document.querySelector(".top-btn");

  function handleScroll() {
    const y = window.scrollY;

    header?.classList.toggle("is-scrolled", y > 20);
    topBtn?.classList.toggle("is-show", y > 450);
  }

  function initTopButton() {
    if (!topBtn) return;

    topBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  function initRevealAnimation() {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
      });
    });

    revealItems.forEach((item) => observer.observe(item));
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  initTopButton();
  initRevealAnimation();
}
