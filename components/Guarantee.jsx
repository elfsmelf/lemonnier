import Photo from "./Photo";
import { images } from "@/lib/images";

const items = [
  {
    h: "110% Satisfaction guarantee",
    p: "If anything isn't right at handover, we fix it. Full stop.",
  },
  {
    h: "Fixed-price quotes",
    p: "Line-itemed, honest quotes. What we quote is what you pay.",
  },
  {
    h: "Fully licensed & insured",
    p: "WA Registered Builder, public liability, workers comp — all covered.",
  },
  {
    h: "One team, start to finish",
    p: "Same designer and build crew on your project from day one to handover.",
  },
];

export default function Guarantee() {
  return (
    <section className="guarantee">
      <div className="container">
        <div className="guarantee-inner">
          <div className="guarantee-photo">
            <Photo
              src={images.heroTeam}
              alt="The Lemonnier Landscapes build team in Perth"
              aspect="4 / 5"
              sizes="(max-width: 900px) 100vw, 460px"
            />
          </div>
          <div className="guarantee-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <span>Why Perth homeowners choose us</span>
            </div>
            <h2 className="h-display">
              The promises we make <em>— and keep.</em>
            </h2>
            <div className="guarantee-grid">
              {items.map((g) => (
                <div className="g-item" key={g.h}>
                  <div className="g-icon" aria-hidden>
                    <svg width="28" height="28" viewBox="0 0 28 28">
                      <path
                        d="M14 2l10 4v8c0 6-4.5 10-10 12C8.5 24 4 20 4 14V6z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9 14l4 4 7-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>
                  <h3>{g.h}</h3>
                  <p>{g.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
