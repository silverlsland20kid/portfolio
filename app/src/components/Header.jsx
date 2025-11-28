import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header({ onOpenContact }) {
  const location = useLocation();

  // 1) DOM용 ref
  const headerRef = useRef(null);
  // 2) 스크롤 방향 계산용 ref
  const lastScrollY = useRef(0);

  // 3) 헤더 상태
  const [isVisible, setIsVisible] = useState(true); // 보임 or 숨김
  const [isTop, setIsTop] = useState(true); // 맨 위 여부

  const isCurrent = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  // GSAP: 페이지 진입 => 라우트 변경 시 헤더 등장 애니메이션
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { y: -45, opacity: 0 });

      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        overwrite: "auto",
        clearProps: "transform,opacity",
      });
    }, headerRef);

    return () => ctx.revert();
  }, [location.pathname]);

  // 스크롤 방향에 따라 헤더 숨기기 or 보이기
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1024) return; // 데스크톱이면 아예 기능 X
      const currentY = window.scrollY;
      setIsTop(currentY < 10);

      // 아래로 스크롤 + 어느 정도 내려왔으면 → 숨김
      if (currentY > lastScrollY.current && currentY > 80) {
        setIsVisible(false);
      } else {
        // 위로 스크롤 or 거의 위쪽 → 보이기
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={
        "site-header" +
        (isVisible ? " is-visible" : " is-hidden") +
        (isTop ? " is-top" : " is-scrolled")
      }
    >
      <div className="site-header__container">
        <div className="site-header__logo">
          <Link to="/" className={`site-header__logo-link`}>
            SilverIsland
          </Link>
        </div>

        <nav className="site-header__nav">
          <div className="site-header__nav-item">
            <Link
              to="/"
              className={`site-header__link ${
                isCurrent("/") ? "site-header__link--current" : ""
              }`}
            >
              WORK
            </Link>
          </div>
          <div className="site-header__nav-item">
            <Link
              to="/lab"
              className={`site-header__link ${
                isCurrent("/lab") ? "site-header__link--current" : ""
              }`}
            >
              LAB
            </Link>
          </div>
          <div className="site-header__nav-item">
            <Link
              to="/about"
              className={`site-header__link ${
                isCurrent("/about") ? "site-header__link--current" : ""
              }`}
            >
              ABOUT
            </Link>
          </div>
          <div className="site-header__nav-item">
            <button
              type="button"
              className="site-header__link"
              onClick={onOpenContact}
            >
              CONTACT
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
