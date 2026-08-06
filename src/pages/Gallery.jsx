import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80',
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&q=80',
  'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80',
  'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80',
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section>
      <div className="container-narrow">
        <h1>Gallery</h1>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i}`} onClick={() => setSelected(src)} />
          ))}
        </div>
      </div>

      {selected && (
        <div className="lightbox-overlay" onClick={() => setSelected(null)}>
          <img src={selected} alt="Enlarged" />
        </div>
      )}
    </section>
  );
}

export default Gallery;