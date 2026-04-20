"use client";

import { useState } from "react";

const qs = [
  {
    q: "How much does high-end landscaping cost in Perth?",
    a: "Our typical projects fall between $50k and $250k+, depending on scope, materials, and site complexity. After your free on-site consult, we provide a fixed, line-itemed quote — no surprises.",
  },
  {
    q: "How long does a project take?",
    a: "Most design-and-build projects run 6–14 weeks on site, after a 3–6 week design and approvals phase. We give you a firm schedule in your proposal.",
  },
  {
    q: "Which Perth suburbs do you service?",
    a: "We work across Perth's western suburbs and beyond — Cottesloe, Peppermint Grove, Dalkeith, City Beach, Mosman Park, Nedlands, Subiaco, Applecross, and surrounds.",
  },
  {
    q: "Do you handle pools, decking, and outdoor kitchens?",
    a: "Yes. Our in-house team covers landscape design, stonework, paving, decking, screens, lighting, planting, irrigation, and ongoing maintenance. We coordinate pool builders and trades where needed.",
  },
  {
    q: "What happens at the free consult?",
    a: "Thibeau or a senior designer visits your property, walks the space with you, listens to your vision, and discusses realistic budget ranges. 45–60 minutes, no pressure, no sales pitch.",
  },
  {
    q: "What if I just want a design, not the build?",
    a: "Design-only packages are available. Many clients start with design then choose us for the build — but there's no obligation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="eyebrow eyebrow--center">
            <span className="eyebrow-line" />
            <span>Questions</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="h-display">Answers before you ask.</h2>
        </div>
        <div className="faq-list">
          {qs.map((item, i) => (
            <div className={"faq-item " + (open === i ? "is-open" : "")} key={item.q}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq-toggle" aria-hidden>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
