const items = [
  { n: "80+", l: "High-end gardens delivered" },
  { n: "4.9★", l: "Average Google rating" },
  { n: "15", l: "Years in Perth" },
  { n: "24hr", l: "Response guaranteed" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {items.map((s) => (
          <div className="stat" key={s.l}>
            <div className="stat-num">{s.n}</div>
            <div className="stat-label">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
