import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__logo">
        LEE EUNSEOM
      </Link>

      <nav className="site-header__nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/work">Work</NavLink>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}
