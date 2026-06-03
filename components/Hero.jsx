"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import QuickQuoteForm from "./QuickQuoteForm";
import { images } from "@/lib/images";
import { getSuburbFromUrl, getServiceFromUrl } from "@/lib/suburb";

export default function Hero({ headline, subhead }) {
  const [suburb, setSuburb] = useState("");
  const [service, setService] = useState("");

  // Read the ?suburb= / ?service= params the Google Ads ad group passed
  // (e.g. ?suburb=Fremantle, ?service=Pool-Landscaping).
  useEffect(() => {
    setSuburb(getSuburbFromUrl());
    setService(getServiceFromUrl());
  }, []);

  // Build a message-matched eyebrow from whichever params are present.
  const eyebrow = service
    ? `${service}${suburb ? ` in ${suburb}` : " in Perth"}`
    : suburb
    ? `Landscaping in ${suburb}`
    : "";

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src={images.lemonnier2}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="hero-scrim" />
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-badges">
            <span className="badge">
              <span className="badge-dot" /> Now booking May 2026
            </span>
            {suburb && (
              <span className="badge badge--ghost">📍 Serving {suburb}</span>
            )}
          </div>

          {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
          <h1 className="display">{headline}</h1>
          <p className="lede">
            {suburb ? (
              <>
                Considered gardens for <strong>{suburb}</strong> homes — from
                concept to handover. Free on-site consult. Fixed-price quotes. 15
                years across Perth&apos;s western suburbs.
              </>
            ) : (
              subhead
            )}
          </p>

          <ul className="hero-bullets">
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Free on-site consultation</strong> — $0, no obligation, no sales pitch.
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>Fixed-price quote</strong> — no surprise fees, ever.
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>In-house build team</strong> — design &amp; build handled by one crew.
              </span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>
                <strong>15 years experience</strong> — 80+ high-end gardens delivered.
              </span>
            </li>
          </ul>

          <div className="hero-call">
            <a href="tel:+61800000000" className="call-big">
              <span className="call-label">Or call Thibeau directly</span>
              <span className="call-num">(08) 9000 0000</span>
            </a>
          </div>
        </div>

        <div className="hero-form-wrap">
          <QuickQuoteForm anchorId="quote" />
        </div>
      </div>
    </section>
  );
}
