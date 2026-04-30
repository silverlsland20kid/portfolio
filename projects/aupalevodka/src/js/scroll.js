import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScroll() {
  ScrollTrigger.create({
    trigger: ".hero",
    start: "top+=40 top",
    end: "bottom top",
    onEnter: () => {
      document.querySelector(".header")?.classList.add("is-hide");
      document.querySelector(".floating-nav")?.classList.add("is-active");
    },
    onLeaveBack: () => {
      document.querySelector(".header")?.classList.remove("is-hide");
      document.querySelector(".floating-nav")?.classList.remove("is-active");
    },
  });

  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  introTl
    .to(".intro__card--left", {
      x: -80,
      y: 60,
      rotation: -8,
      duration: 1,
    })
    .to(
      ".intro__card--right",
      {
        x: 90,
        y: -40,
        rotation: 8,
        duration: 1,
      },
      "<",
    )
    .to(
      ".intro__title",
      {
        y: -60,
        opacity: 0,
        duration: 0.7,
      },
      0.75,
    )
    .to(
      ".intro__copy",
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
      },
      0.75,
    )
    .to(
      ".intro__card",
      {
        opacity: 0,
        scale: 0.88,
        duration: 0.6,
      },
      1.05,
    )
    .fromTo(
      ".intro__scene--02",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
      },
      1.15,
    )
    .fromTo(
      ".intro__second-title span",
      {
        y: 90,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.8,
      },
      1.25,
    )
    .fromTo(
      ".intro__float--left",
      {
        x: -120,
        y: 80,
        rotation: -10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        rotation: -3,
        opacity: 1,
        duration: 0.9,
      },
      1.25,
    )
    .fromTo(
      ".intro__float--right",
      {
        x: 120,
        y: -70,
        rotation: 10,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        rotation: 4,
        opacity: 1,
        duration: 0.9,
      },
      1.25,
    );
}
