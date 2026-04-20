import Photo from "./Photo";
import { images } from "@/lib/images";

const projects = [
  { img: images.lemonnier2, alt: "Lemonnier Landscapes project photo" },
  { img: images.grass2, alt: "Lemonnier Landscapes project photo" },
  { img: images.landscaperAction, alt: "Lemonnier Landscapes build team at work" },
  { img: images.lawnNewLandscape, alt: "Lemonnier Landscapes project photo" },
];

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <span>Recent Perth projects</span>
            </div>
            <h2 className="h-display">
              High-end gardens,
              <br />
              built across Perth.
            </h2>
          </div>
          <a href="#quote" className="btn btn--ghost">
            Start your project →
          </a>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => (
            <a className="work-card" href="#quote" key={i}>
              <Photo
                src={p.img}
                alt={p.alt}
                aspect="4 / 5"
                sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 300px"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
