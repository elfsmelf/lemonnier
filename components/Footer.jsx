import Image from "next/image";
import { images } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2 className="h-display">Ready to start your garden?</h2>
          <p>
            Book a free on-site consult — no obligation, no sales pitch. Thibeau
            calls you personally within 24 hours.
          </p>
          <div className="footer-cta-actions">
            <a href="#quote" className="btn btn--primary btn--lg">
              Get your free quote →
            </a>
            <a href="tel:+61800000000" className="btn btn--ghost btn--lg">
              <svg width="16" height="16" viewBox="0 0 14 14" aria-hidden>
                <path
                  d="M2 3a1 1 0 0 1 1-1h2l1.5 3L5 6.5a8 8 0 0 0 2.5 2.5L9 8l3 1.5v2a1 1 0 0 1-1 1A9 9 0 0 1 2 3z"
                  fill="currentColor"
                />
              </svg>
              Call (08) 9000 0000
            </a>
          </div>
        </div>
        <div className="footer-inner">
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
      </div>
    </footer>
  );
}
