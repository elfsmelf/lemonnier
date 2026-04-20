const palettes = {
  stone: { bg: "#e8e2d4", stripe: "#ddd4c0", ink: "#5a5244" },
  moss: { bg: "#3a4a34", stripe: "#344128", ink: "#c9d1b8" },
  sand: { bg: "#d9cfb8", stripe: "#cbc1a8", ink: "#5a5244" },
  ink: { bg: "#1a1f1a", stripe: "#222a22", ink: "#c9d1b8" },
};

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function Placeholder({
  label,
  aspect = "4 / 3",
  tone = "stone",
  className = "",
  style = {},
}) {
  const p = palettes[tone] || palettes.stone;
  const id = "ph-" + slug(label);
  return (
    <div
      className={"placeholder " + className}
      style={{ aspectRatio: aspect, ...style }}
    >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 400 300">
        <defs>
          <pattern
            id={id}
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <rect width="16" height="16" fill={p.bg} />
            <rect width="1" height="16" fill={p.stripe} />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#${id})`} />
      </svg>
      <span
        className="placeholder-label"
        style={{ color: p.ink, borderColor: p.ink + "55" }}
      >
        {label}
      </span>
    </div>
  );
}
