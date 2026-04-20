import Image from "next/image";
import { images } from "@/lib/images";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label="Lemonnier Landscapes">
          <span className="logo-img">
            <Image
              src={images.logo}
              alt="Lemonnier Landscapes"
              width={320}
              height={89}
              priority
              sizes="(max-width: 640px) 120px, 160px"
              style={{ width: "100%", height: "auto" }}
            />
          </span>
        </a>
        <div className="nav-right">
          <a href="tel:+61401046618" className="nav-phone" aria-label="Call 0401 046 618">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path
                d="M2 3a1 1 0 0 1 1-1h2l1.5 3L5 6.5a8 8 0 0 0 2.5 2.5L9 8l3 1.5v2a1 1 0 0 1-1 1A9 9 0 0 1 2 3z"
                fill="currentColor"
              />
            </svg>
            <span className="nav-phone-text">0401 046 618</span>
          </a>
          <a href="#quote" className="btn btn--primary btn--sm">
            Get free quote
          </a>
        </div>
      </div>
    </header>
  );
}
