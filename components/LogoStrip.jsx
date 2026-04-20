const items = [
  "Featured in Perth Home",
  "HIA Member",
  "Landscape Industries WA",
  "10+ Houzz Awards",
  "Licensed Builder WA",
];

export default function LogoStrip() {
  return (
    <section className="logostrip">
      <div className="container">
        <div className="logostrip-label">As seen in &amp; trusted by</div>
        <div className="logostrip-row">
          {items.map((t) => (
            <span className="logoitem" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
