import QuickQuoteForm from "./QuickQuoteForm";

export default function Hero({ headline, subhead }) {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-badges">
            <span className="badge">
              <span className="badge-dot" /> Now booking May 2026
            </span>
          </div>
          <h1 className="display">{headline}</h1>
          <p className="lede">{subhead}</p>

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
