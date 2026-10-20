
"use client";

import { useEffect, useState } from "react";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    return () => {
      photos.forEach((photo) => URL.revokeObjectURL(photo.url));
    };
  }, [photos]);

  function handleFiles(event) {
    const files = Array.from(event.target.files || []);

    const newPhotos = files.map((file) => ({
      id: `${file.name}-${file.lastModified}-${Math.random()}`,
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setPhotos((current) => [...current, ...newPhotos]);
    event.target.value = "";
  }

  function removePhoto(id) {
    setPhotos((current) => {
      const photo = current.find((item) => item.id === id);

      if (photo) URL.revokeObjectURL(photo.url);

      return current.filter((item) => item.id !== id);
    });
  }

  return (
    <section className="photo-gallery">
      <div className="gallery-heading">
        <div>
          <p className="eyebrow">LITTLE THINGS, FOREVER</p>
          <h3>Our photo moments</h3>
        </div>

        <label className="button button-dark upload-button">
          Add photos ＋
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFiles}
          />
        </label>
      </div>

      {photos.length === 0 ? (
        <div className="empty-photo">
          <span>✳</span>
          <strong>Our memories go here</strong>
          <p>Add beach photos, blurry laughs, and little moments.</p>
        </div>
      ) : (
        <div className="photo-grid">
          {photos.map((photo) => (
            <figure className="photo-tile" key={photo.id}>
              <img src={photo.url} alt={photo.name} />
              <figcaption>
                <span>{photo.name}</span>
                <button
                  type="button"
                  onClick={() => removePhoto(photo.id)}
                  aria-label={`Remove ${photo.name}`}
                >
                  ×
                </button>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <p className="gallery-note">
        Photos are previewed in this browser only.
      </p>
    </section>
  );
}
