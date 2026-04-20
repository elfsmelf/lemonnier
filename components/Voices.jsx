import ReviewsCarousel from "./ReviewsCarousel";

export default function Voices() {
  return (
    <section id="voices" className="voices">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="eyebrow eyebrow--center">
            <span className="eyebrow-line" />
            <span>What Perth homeowners say</span>
            <span className="eyebrow-line" />
          </div>
          <div className="voices-rating">
            <span className="voices-stars">★★★★★</span>
            <strong>4.9 out of 5</strong>
            <span className="voices-count">from 50+ verified Google reviews</span>
          </div>
        </div>
        <ReviewsCarousel />
      </div>
    </section>
  );
}
