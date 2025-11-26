import { useState } from "react";
import Header from "./Header";
import ContactModal from "./ContactModal";

export default function Layout({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="layout">
      <Header onOpenContact={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <main className="main-section">{children}</main>
    </div>
  );
}
