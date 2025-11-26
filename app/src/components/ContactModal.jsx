import { useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  // body 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC로 닫기
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="contactModalTitle"
    >
      <div className="contact-modal__backdrop" onClick={onClose}></div>
      <div className="contact-modal__content">
        <button
          className="contact-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="contact-modal__title" id="contactModalTitle">
          Contact
        </h2>
        <ul className="contact-modal__list">
          <li>
            <a
              href="mailto:dmstja2110@naver.com"
              className="contact-modal__link"
              target="_blank"
              rel="noopener"
            >
              <span className="contact-modal__icon">✉️</span>
              dmstja2110@naver.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-github-id"
              className="contact-modal__link"
              target="_blank"
              rel="noopener"
            >
              <span className="contact-modal__icon">👽</span>
              github.com/your-github-id
            </a>
          </li>
          <li>
            <a
              href="https://blog.naver.com/coolkids2"
              className="contact-modal__link"
              target="_blank"
              rel="noopener"
            >
              <span className="contact-modal__icon">💫</span>
              blog.naver.com/coolkids2
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
