"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("quote");
    if (!form) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting && window.scrollY > form.offsetTop);
      },
      { threshold: 0, rootMargin: "0px" }
    );
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div className={"stickycta " + (visible ? "visible" : "")}>
      <a href="tel:+61800000000" className="stickycta-btn stickycta-call">
        <svg width="16" height="16" viewBox="0 0 14 14">
          <path
            d="M2 3a1 1 0 0 1 1-1h2l1.5 3L5 6.5a8 8 0 0 0 2.5 2.5L9 8l3 1.5v2a1 1 0 0 1-1 1A9 9 0 0 1 2 3z"
            fill="currentColor"
          />
        </svg>
        Call now
      </a>
      <a href="#quote" className="stickycta-btn stickycta-quote">
        Free quote →
      </a>
    </div>
  );
}
