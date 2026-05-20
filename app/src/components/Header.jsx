import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleMove = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const target = document.getElementById(id);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="site-header">
      <Link to="/" className="site-header__logo">
        LEE EUNSEOM
      </Link>

      <nav className="site-header__nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`site-header__link ${
              activeSection === item.id ? "is-active" : ""
            }`}
            onClick={() => handleMove(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}