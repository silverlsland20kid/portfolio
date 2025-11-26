import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header({ onOpenContact }) {
  const location = useLocation();
  const headerRef = useRef(null);

  const isCurrent = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  // 헤더 애니메이션 GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 라우트 바뀔 때마다 초기상태 다시 세팅
      gsap.set(headerRef.current, { y: -45, opacity: 0 });

      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        overwrite: "auto", // 이전 애니메이션 덮어쓰기
        clearProps: "transform,opacity",
      });
    }, headerRef);

    return () => ctx.revert();
  }, [location.pathname]); // 페이지 바뀔 때마다 실행됨

  return (
    <header className="site-header" ref={headerRef}>
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
