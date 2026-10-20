
import CountDownTimer from "./CountDownTimer";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div
        className="hero-image"
        role="img"
        aria-label="Ocean waves on a tropical beach"
      />

      <div className="hero-content">
        <p className="eyebrow light">A LITTLE TRIP FOR TWO</p>

        <h1>
          Our Little
          <br />
          <em>Mombasa</em> Escape
        </h1>

        <p className="hero-copy">
          Ocean air, slow mornings, golden sunsets, and
          memories that will always feel like summer.
        </p>

        <div className="hero-actions">
          <a className="button button-light" href="#itinerary">
            Explore our plans ↗
          </a>

          <a className="text-link light" href="#love-note">
            A little love note ↓
          </a>
        </div>

        <p className="hero-countdown-label">
          COUNTING DOWN TO OUR COASTAL ESCAPE
        </p>

        <CountDownTimer />

        <div className="hero-footnote">
          <span>KENYA'S COAST</span>
          <span>MADE WITH LOVE ♡</span>
        </div>
      </div>

      <div className="hero-stamp">
        sun
        <br />
        sea
        <br />
        <span>&</span> us
      </div>
    </section>
  );
}
