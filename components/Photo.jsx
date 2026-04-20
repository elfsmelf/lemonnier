import Image from "next/image";

export default function Photo({
  src,
  alt,
  aspect = "4 / 3",
  className = "",
  sizes = "(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw",
  priority = false,
}) {
  return (
    <div
      className={"placeholder " + className}
      style={{ aspectRatio: aspect, background: "var(--bg-2)" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
