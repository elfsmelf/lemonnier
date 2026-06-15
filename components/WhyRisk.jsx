const items = [
  {
    p: "An overgrown, tired yard dragging down your kerb appeal",
    s: "A considered redesign with year-round structure, impact, and resale value.",
  },
  {
    p: "Water pooling, erosion, and poor drainage after every storm",
    s: "Proper grading, drainage, and irrigation engineered in from the start.",
  },
  {
    p: "Patchy lawn that scorches and dies through the Perth summer",
    s: "The right turf, properly prepped and laid to stay green year-round.",
  },
  {
    p: "Quotes that quietly balloon halfway through the job",
    s: "Fixed-price, line-itemed quotes — what we quote is what you pay.",
  },
  {
    p: "Chasing five different trades who never talk to each other",
    s: "One in-house crew, design to handover, fully licensed and insured.",
  },
  {
    p: "Not knowing where to start — or what it should really cost",
    s: "A free on-site consult with honest budget ranges and zero pressure.",
  },
];

export default function WhyRisk() {
  return (
    <section id="why" className="whyrisk">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="eyebrow eyebrow--center">
            <span className="eyebrow-line" />
            <span>The cost of waiting</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="h-display">
            Why risk a lacklustre yard <em>or poor kerb appeal?</em>
          </h2>
        </div>
        <div className="whyrisk-grid">
          {items.map((it) => (
            <div className="whyrisk-item" key={it.p}>
              <div className="whyrisk-problem">
                <span className="whyrisk-x" aria-hidden>
                  ✕
                </span>
                <p>{it.p}</p>
              </div>
              <div className="whyrisk-solution">
                <span className="whyrisk-check" aria-hidden>
                  ✓
                </span>
                <p>{it.s}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="whyrisk-cta">
          <a href="#quote" className="btn btn--primary btn--lg">
            Book my free consult →
          </a>
          <span>Free · No obligation · 24hr response</span>
        </div>
      </div>
    </section>
  );
}
