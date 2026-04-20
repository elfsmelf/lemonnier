"use client";

import { useState } from "react";
import { images } from "@/lib/images";

const reviews = [
  { src: images.review1, mobileSrc: null },
  { src: images.review2, mobileSrc: null },
  { src: images.review3, mobileSrc: images.reviewMobile },
  { src: images.review4, mobileSrc: null },
];

const alt = "Five-star Google review — Lemonnier Landscapes";

export default function ReviewsCarousel() {
  const [i, setI] = useState(0);
  const count = reviews.length;
  const go = (n) => setI((n + count) % count);

  return (
    <div className="reviews-carousel">
      <div className="reviews-stage" aria-live="polite">
        {reviews.map((r, idx) => (
          <picture
            key={idx}
            className={"reviews-img " + (idx === i ? "is-active" : "")}
            aria-hidden={idx !== i}
          >
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
      <div className="reviews-controls">
        <button
          type="button"
          className="reviews-btn"
          onClick={() => go(i - 1)}
          aria-label="Previous review"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <path
              d="M11 3L5 9l6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="reviews-dots" role="tablist">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={"reviews-dot " + (idx === i ? "on" : "")}
              onClick={() => go(idx)}
              aria-label={`Go to review ${idx + 1}`}
              aria-selected={idx === i}
              role="tab"
            />
          ))}
        </div>
        <button
          type="button"
          className="reviews-btn"
          onClick={() => go(i + 1)}
          aria-label="Next review"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <path
              d="M7 3l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="reviews-counter">
        Review {i + 1} of {count}
      </div>
    </div>
  );
}
