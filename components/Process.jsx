const steps = [
  {
    t: "Book free consult",
    d: "60-second form. Thibeau calls within 24 hours to book a site visit — at your place, at your convenience.",
  },
  {
    t: "On-site design talk",
    d: "We walk the space together, understand your vision, budget, and timing. Usually 45–60 minutes.",
  },
  {
    t: "Fixed-price proposal",
    d: "A considered plan and a firm, line-itemed quote. No surprise fees, no upsells. Take the time you need.",
  },
  {
    t: "Build & handover",
    d: "Our in-house crew builds your garden. You see progress, we welcome your input, and we walk through together at the end.",
  },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="eyebrow eyebrow--center">
            <span className="eyebrow-line" />
            <span>How it works</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="h-display">
            From enquiry to finished garden <em>in four simple steps.</em>
          </h2>
        </div>
        <ol className="process-steps">
          {steps.map((s, i) => (
            <li key={s.t}>
              <div className="ps-num">0{i + 1}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
