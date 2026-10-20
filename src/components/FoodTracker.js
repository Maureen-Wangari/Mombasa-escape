
"use client";

import { useState } from "react";

const foods = [
  "Swahili biryani",
  "Mishkaki",
  "Viazi karai",
  "Coconut beans",
  "Fresh madafu",
  "Mahamri and chai",
  "Grilled fish",
  "Passion juice",
];

export default function FoodTracker() {
  const [selected, setSelected] = useState([]);
  const [suggestion, setSuggestion] = useState("");

  function toggleFood(food) {
    setSelected((current) =>
      current.includes(food)
        ? current.filter((item) => item !== food)
        : [...current, food]
    );
  }

  function pickFood() {
    const choices = selected.length ? selected : foods;
    const random = Math.floor(Math.random() * choices.length);
    setSuggestion(choices[random]);
  }

  return (
    <section className="tool-card" id="food">
      <div className="tool-heading">
        <span className="tool-icon">☼</span>
        <div>
          <p className="eyebrow">A TASTE OF THE COAST</p>
          <h3>What should we eat?</h3>
        </div>
      </div>

      <p className="muted">
        Choose dishes to try, then let fate pick our next bite.
      </p>

      <div className="food-chips">
        {foods.map((food) => (
          <button
            key={food}
            type="button"
            className={`food-chip ${
              selected.includes(food) ? "selected" : ""
            }`}
            onClick={() => toggleFood(food)}
          >
            {food}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="button button-dark full-button"
        onClick={pickFood}
      >
        Pick our next meal ✨
      </button>

      {suggestion && (
        <p className="food-result">
          Let's try <strong>{suggestion}</strong> ♡
        </p>
      )}
    </section>
  );
}
