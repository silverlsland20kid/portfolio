import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/Intro.css";

export default function IntroOverlay({ onDone }) {
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: onDone,
    });

    tl.fromTo(
      overlayRef.current,
      { autoAlpha: 1 },
      { autoAlpha: 1, duration: 0.2 },
    )
      .from(textRef.current, { y: 24, autoAlpha: 0, duration: 0.9 })
      .to(textRef.current, { y: -12, autoAlpha: 0, duration: 0.5, delay: 0.3 })
      .to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.7,
        clearProps: "all",
      });
  }, [onDone]);

  return (
    <div className="intro-overlay" ref={overlayRef}>
      <div className="intro-inner" ref={textRef}>
        <p className="intro-eyebrow">PORTFOLIO OF</p>
        <h1 className="intro-title">SilverIsland</h1>
      </div>
    </div>
  );
}
