import { images } from "@/lib/images";

const reviews = [
  { src: images.review1, mobileSrc: null },
  { src: images.review2, mobileSrc: null },
  { src: images.review3, mobileSrc: images.reviewMobile },
  { src: images.review4, mobileSrc: null },
];

const alt = "Five-star Google review — Lemonnier Landscapes";

export default function ReviewsCarousel() {
  return (
    <div className="reviews-grid">
      {reviews.map((r, idx) => (
        <picture key={idx} className="reviews-img-static">
          {r.mobileSrc && <source media="(max-width: 600px)" srcSet={r.mobileSrc} />}
          <img
            src={r.src}
            alt={alt}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </picture>
      ))}
    </div>
  );
}
