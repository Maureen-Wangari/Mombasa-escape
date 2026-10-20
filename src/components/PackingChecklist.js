
"use client";

import { useState } from "react";

const items = [
  "IDs and booking details",
  "Phone chargers and power bank",
  "Swimwear",
  "Light outfits",
  "Comfortable sandals",
  "Sunscreen",
  "Toiletries",
  "A little cash",
  "Camera or phone",
  "A handwritten note",
];

export default function PackingChecklist() {
  const [packed, setPacked] = useState([]);

  function toggleItem(item) {
    setPacked((current) =>
      current.includes(item)
        ? current.filter((entry) => entry !== item)
        : [...current, item]
    );
  }

  const progress = (packed.length / items.length) * 100;

  return (
    <section className="tool-card" id="packing">
      <div className="tool-heading">
        <span className="tool-icon">✳</span>
        <div>
          <p className="eyebrow">DON'T FORGET</p>
          <h3>Packing checklist</h3>
        </div>
      </div>

      <div className="progress-track">
        <span style={{ width: `${progress}%` }} />
      </div>

      <p className="progress-label">
        {packed.length} of {items.length} packed
      </p>

      <div className="check-list packing-list">
        {items.map((item) => (
          <label className="check-row" key={item}>
            <input
              type="checkbox"
              checked={packed.includes(item)}
              onChange={() => toggleItem(item)}
            />
            <span className={packed.includes(item) ? "completed" : ""}>
              {item}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}
