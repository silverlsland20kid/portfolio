import { useState } from "react";
import Header from "./Header";
import ContactModal from "./ContactModal";

export default function Layout({ children }) {
  // 연락처 모달 상태
  const [isContactOpen, setIsContactOpen] = useState(false);
  // 연락처 모달 열기/닫기 함수
  const openContact = () => setIsContactOpen(true);
  // 연락처 모달 닫기 함수
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="layout">
      <Header onOpenContact={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <main className="main-section">{children}</main>
    </div>
  );
}
