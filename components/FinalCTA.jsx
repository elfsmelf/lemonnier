import QuickQuoteForm from "./QuickQuoteForm";

export default function FinalCTA() {
  return (
    <section id="final" className="finalcta">
      <div className="container finalcta-grid">
        <div className="finalcta-copy">
          <div className="eyebrow eyebrow--light">
            <span className="eyebrow-line" />
            <span>Ready to start?</span>
          </div>
          <h2 className="h-display h-display--light">
            Book your free
            <br />
            on-site consult <em>today.</em>
          </h2>
          <p className="finalcta-lede">
            No obligation, no sales pitch, no cost. Just an honest conversation about your garden
            with someone who&apos;s built 80+ of them across Perth.
          </p>
          <div className="finalcta-contacts">
            <a className="btn btn--warm btn--lg" href="tel:+61800000000">
              <svg width="16" height="16" viewBox="0 0 14 14" aria-hidden>
                <path
                  d="M2 3a1 1 0 0 1 1-1h2l1.5 3L5 6.5a8 8 0 0 0 2.5 2.5L9 8l3 1.5v2a1 1 0 0 1-1 1A9 9 0 0 1 2 3z"
                  fill="currentColor"
                />
              </svg>
              Call (08) 9000 0000
            </a>
            <a className="btn btn--ghost btn--ghost-light btn--lg" href="#quote">
              Use the form instead →
            </a>
          </div>
          <div className="finalcta-proof">
            <span>★★★★★ 4.9 on Google</span>
            <span className="dot" />
            <span>50+ reviews</span>
            <span className="dot" />
            <span>Licensed &amp; insured</span>
            <span className="dot" />
            <span>15 years experience</span>
          </div>
        </div>
        <div className="finalcta-form-wrap">
          <QuickQuoteForm compact anchorId="quote-bottom" />
        </div>
      </div>
    </section>
  );
}
