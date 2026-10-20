
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Itinerary from "../components/Itinerary";
import TaskManager from "../components/TaskManager";
import PackingChecklist from "../components/PackingChecklist";
import FoodTracker from "../components/FoodTracker";
import TripScrapbook from "../components/TripScrapbook";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      <section className="intro section-wrap" id="love-note">
        <div className="intro-symbol">✳</div>
        <div>
          <p className="eyebrow">A NOTE TO US</p>
          <h2>
            Less scrolling.
            <br />
            <em>More living.</em>
          </h2>
        </div>
        <p className="intro-copy">
          This little corner of the internet is for our plans,
          tiny adventures, food we want to try, and moments
          we never want to forget. No pressure for perfection,
          just us making time for us.
        </p>
      </section>

      <Itinerary />

      <section className="sunset-band">
        <div>
          <p className="eyebrow light">OUR KIND OF PARADISE</p>
          <h2>
            Golden hour looks
            <br />
            <em>better with you.</em>
          </h2>
        </div>
        <p>
          Let's leave room for spontaneity. The best memories
          don't always make it onto the itinerary.
        </p>
      </section>

      <section className="tools-section section-wrap" id="checklist">
        <div className="section-title">
          <p className="eyebrow">THE PRACTICAL LITTLE THINGS</p>
          <h2>Let's get ready</h2>
          <p className="muted">
            Less organising, more enjoying.
          </p>
        </div>

        <div className="tool-grid">
          <TaskManager />
          <PackingChecklist />
          <FoodTracker />
        </div>
      </section>

      <TripScrapbook />

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">♡</span>
          our little escape
        </a>
        <p>Made for the memories we haven't made yet.</p>
        <span className="footer-heart">WITH LOVE, ALWAYS ♡</span>
      </footer>
    </main>
  );
}
