
"use client";

import { useState } from "react";
import PhotoGallery from "./PhotoGallery";

export default function TripScrapbook() {
  const [memory, setMemory] = useState("");
  const [savedMemory, setSavedMemory] = useState("");

  function saveMemory(event) {
    event.preventDefault();
    setSavedMemory(memory.trim());
  }

  return (
    <section className="scrapbook section-wrap" id="memories">
      <div className="section-title">
        <p className="eyebrow">LITTLE THINGS, FOREVER</p>
        <h2>Let's keep the good bits.</h2>
        <p className="muted">
          A tiny scrapbook for photos and moments we want to remember.
        </p>
      </div>

      <PhotoGallery />

      <form className="memory-note scrapbook-note" onSubmit={saveMemory}>
        <span>♡</span>
        <label htmlFor="memory-text">A little memory to keep</label>

        <textarea
          id="memory-text"
          rows={4}
          value={memory}
          onChange={(event) => setMemory(event.target.value)}
          placeholder="Write an inside joke or a favourite moment..."
        />

        <button type="submit" className="button button-dark">
          Save this memory
        </button>

        {savedMemory && (
          <p className="saved-memory">
            <strong>Saved for this visit:</strong> {savedMemory}
          </p>
        )}
      </form>
    </section>
  );
}
