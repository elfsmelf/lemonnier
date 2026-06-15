"use client";

import { useState, useEffect } from "react";
import QuickQuoteForm from "./QuickQuoteForm";
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

  // Build a message-matched eyebrow from whichever params are present, falling
  // back to a Perth geo line so the hero always reads as locally relevant.
  const eyebrow = service
    ? `${service}${suburb ? ` in ${suburb}` : " in Perth"}`
    : suburb
    ? `Landscaping in ${suburb}`
    : "Perth's high-end landscape designers & builders";

  return (
    <section id="top" className="hero hero--centered">
      <div className="hero-inner">
        {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
        <h1 className="display">{headline}</h1>
        <p className="lede">{subhead}</p>

        <ul className="hero-trust">
          <li>
            <span className="check">✓</span> Free on-site consult
          </li>
          <li>
            <span className="check">✓</span> Fixed-price quotes
          </li>
          <li>
            <span className="check">✓</span> In-house build team
          </li>
          <li>
            <span className="check">✓</span> 15 years experience
          </li>
        </ul>

        <div className="hero-call">
          <a href="tel:+61800000000" className="btn btn--white btn--lg">
            <svg width="22" height="22" viewBox="0 0 14 14" aria-hidden>
              <path
                d="M2 3a1 1 0 0 1 1-1h2l1.5 3L5 6.5a8 8 0 0 0 2.5 2.5L9 8l3 1.5v2a1 1 0 0 1-1 1A9 9 0 0 1 2 3z"
                fill="currentColor"
              />
            </svg>
            Speak With Us — (08) 9000 0000
          </a>
        </div>

        <p className="hero-formintro">
          Simply call or fill in the form below for your complimentary expert
          Perth landscape assessment!
        </p>

        <div className="hero-form-block">
          <QuickQuoteForm anchorId="quote" />
        </div>
      </div>
    </section>
  );
}
