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
              width={320}
              height={89}
              sizes="180px"
              style={{ width: "180px", height: "auto" }}
            />
          </div>
          <p>Perth&apos;s high-end landscape designers &amp; builders. Since 2011.</p>
        </div>
        <div className="footer-meta">
          <span>© 2026 Lemonnier Landscapes · Perth, WA</span>
          <span>ABN 32 409 955 667</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
