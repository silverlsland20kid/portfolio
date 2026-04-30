import gsap from "gsap";

export function introAnimation() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  gsap.set(".wrap", {
    scale: 0.12,
    y: "42vh",
    transformOrigin: "50% 100%",
    borderRadius: "2rem",
    overflow: "hidden",
  });

  gsap.set(".header", {
    y: -30,
    opacity: 0,
  });

  gsap.set(".hero__title-line", {
    y: 120,
    opacity: 0,
  });

  gsap.set(".hero__thumb", {
    y: 40,
    opacity: 0,
  });

  gsap.set(".hero__desc", {
    y: 40,
    opacity: 0,
  });

  tl.to(".wrap", {
    scale: 1,
    y: 0,
    borderRadius: 0,
    duration: 1.6,
    clearProps: "transform",
  });

  tl.to(
    ".header",
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
    },
    "-=0.7",
  );

  tl.to(
    ".hero__title-line",
    {
      y: 0,
      opacity: 1,
      duration: 1.1,
      stagger: 0.16,
    },
    "-=0.45",
  );

  tl.to(
    ".hero__thumb",
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
    },
    "-=0.55",
  );

  tl.to(
    ".hero__desc",
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
    },
    "-=0.65",
  );
}
