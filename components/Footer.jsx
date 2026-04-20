import Image from "next/image";
import { images } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <Image
              src={images.logo}
              alt="Lemonnier Landscapes"
              width={28}
              height={28}
              sizes="28px"
              style={{ width: "28px", height: "28px", objectFit: "contain" }}
            />
            <span className="logo-word">Lemonnier Landscapes</span>
          </div>
          <p>Perth&apos;s high-end landscape designers &amp; builders. Since 2011.</p>
        </div>
        <div className="footer-meta">
          <span>© 2026 Lemonnier Landscapes · Perth, WA</span>
          <span>ABN 00 000 000 000 · WA Reg. Builder 00000</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
