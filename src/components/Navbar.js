
"use client";

import { useState } from "react";

const links = [
  ["The plan", "#itinerary"],
  ["Checklist", "#checklist"],
  ["Food", "#food"],
  ["Memories", "#memories"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="brand" href="#home">
        <span className="brand-mark">♡</span> our little escape
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? "×" : "☰"}
      </button>

      <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>

      <a className="nav-cta" href="#itinerary">
        Let's go ↗
      </a>
    </nav>
  );
}
