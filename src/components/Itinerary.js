
"use client";

import { useState } from "react";

const days = [
  {
    day: "Day 1",
    date: "Friday",
    title: "Arrival & Ocean Air",
    note: "Arrive, breathe, and enjoy being together.",
    items: [
      "PRAY before we begin our day",
      "Travel to Mombasa and check in",
      "Take a slow walk by the ocean",
      "Enjoy a sunset dinner together",
    ],
  },
  {
    day: "Day 2",
    date: "Saturday",
    title: "Explore the Coast",
    note: "A little adventure, history, and plenty of photos.",
    items: [
      "PRAY before we begin our day",
      "Have breakfast together",
      "Explore Old Town and Fort Jesus",
      "Try a coastal lunch",
      "Watch the sunset at the beach",
    ],
  },
  {
    day: "Day 3",
    date: "Sunday",
    title: "Soft Life & Sweet Moments",
    note: "Relax and choose what feels good in the moment.",
    items: [
      "PRAY before we begin our day",
      "Sleep in and enjoy breakfast",
      "Choose a beach activity or swim",
      "Have a cute date night",
      "Exchange little letters or gifts",
    ],
  },
  {
    day: "Day 4",
    date: "Monday",
    title: "One Last Coastal Morning",
    note: "Leave with a full camera roll and full hearts.",
    items: [
      "PRAY before we begin our day",
      "Take a final morning walk",
      "Have breakfast and pack",
      "Take one last photo together",
      "Travel home safely",
    ],
  },
];

export default function Itinerary() {
  const [activeDay, setActiveDay] = useState(0);
  const selected = days[activeDay];

  return (
    <section className="itinerary-section section-wrap" id="itinerary">
      <div className="section-title">
        <p className="eyebrow">WE REALLY NEED THIS ADVENTURE</p>
        <h2>A few days by the sea</h2>
        <p className="muted">
          A flexible plan for our coastal escape.
        </p>
      </div>

      <div className="itinerary-layout">
        <div className="day-tabs">
          {days.map((day, index) => (
            <button
              key={day.day}
              className={`day-tab ${
                activeDay === index ? "active" : ""
              }`}
              onClick={() => setActiveDay(index)}
            >
              <span>{day.day}</span>
              <strong>{day.title}</strong>
              <small>{day.date}</small>
            </button>
          ))}
        </div>

        <article className="day-card">
          <div className="day-card-top">
            <span className="pill">OUR ITINERARY</span>
            <span className="day-number">
              0{activeDay + 1} / 04
            </span>
          </div>

          <p className="eyebrow">
            {selected.date.toUpperCase()} IN MOMBASA
          </p>

          <h3>{selected.title}</h3>
          <p className="muted">{selected.note}</p>

          <ul className="activity-list">
            {selected.items.map((item, index) => (
              <li key={item}>
                <span className="activity-check">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="day-card-bottom">
            THE BEST PART IS IM WITH YOU DADA, I LOVE YOU<span>♡</span>
          </div>
        </article>
      </div>
    </section>
  );
}
