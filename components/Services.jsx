import Photo from "./Photo";
import { images } from "@/lib/images";

const svcs = [
  {
    t: "Landscape design",
    d: "Custom plans drawn for your site, climate, and lifestyle. From concept to full documentation.",
    img: images.perthLandscaping,
    alt: "Landscape designer Perth — custom garden plan",
  },
  {
    t: "Pool landscaping",
    d: "Poolside retreats — paving, decking, screens, lighting, and planting that holds up to Perth summers.",
    img: images.poolLandscaping,
    alt: "Pool landscaping Perth — poolside retreat",
  },
  {
    t: "Backyard renovation",
    d: "Full backyard overhauls — entertaining zones, outdoor kitchens, lawn, screens, and soft planting.",
    img: images.lawnNewLandscape,
    alt: "Backyard renovation Perth — new landscape and lawn",
  },
  {
    t: "Front yard design",
    d: "Arrival gardens that add kerb appeal and value. Driveways, entries, and feature planting.",
    img: images.artificialGrass,
    alt: "Front yard landscaping — arrival garden",
  },
  {
    t: "Garden maintenance",
    d: "Ongoing care programs so your investment keeps getting better. Tiered to suit your garden.",
    img: images.grass,
    alt: "Garden maintenance Perth — lawn care",
  },
  {
    t: "Stonework & paving",
    d: "Limestone, travertine, bluestone — beautifully laid and built to last decades.",
    img: images.pavingBricks,
    alt: "Paving and stonework Perth — laid brick paving",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>Services</span>
          </div>
          <h2 className="h-display">
            Everything your outdoor space needs — <em>from one team.</em>
          </h2>
        </div>
        <div className="services-grid">
          {svcs.map((s) => (
            <a href="#quote" className="svc" key={s.t}>
              <Photo
                src={s.img}
                alt={s.alt}
                aspect="16 / 10"
                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 420px"
              />
              <div className="svc-body">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="svc-cta">
                  Get a quote{" "}
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path
                      d="M2 7h9M7 3l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
