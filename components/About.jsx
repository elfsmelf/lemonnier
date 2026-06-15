import Photo from "./Photo";
import { images } from "@/lib/images";

const stats = [
  { n: "80+", l: "High-end gardens delivered" },
  { n: "4.9★", l: "Average Google rating" },
  { n: "15", l: "Years experience" },
  { n: "110%", l: "Satisfaction guarantee" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-photo">
          <Photo
            src={images.heroTeam}
            alt="The Lemonnier Landscapes build team in Perth"
            aspect="4 / 5"
            sizes="(max-width: 900px) 100vw, 440px"
          />
        </div>
        <div className="about-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>Locally owned · Perth</span>
          </div>
          <h2 className="h-display">
            A Perth team that treats your garden <em>like our own.</em>
          </h2>
          <p className="about-lede">
            Lemonnier Landscapes is a locally owned, family-run studio building
            high-end gardens across Perth&apos;s western suburbs. You deal with
            the same designer and in-house build crew from first consult to
            handover — no subcontractor shuffle, no sales pitch, no surprise
            fees. Just considered design, honest fixed-price quotes, and a finish
            we stand behind <strong>110%</strong>.
          </p>
          <div className="about-stats">
            {stats.map((s) => (
              <div className="about-stat" key={s.l}>
                <div className="about-stat-num">{s.n}</div>
                <div className="about-stat-label">{s.l}</div>
              </div>
            ))}
          </div>
          <a href="#quote" className="btn btn--primary">
            Get your free quote →
          </a>
        </div>
      </div>
    </section>
  );
}
