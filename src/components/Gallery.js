import React, { useMemo, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Lightbox from "./Lightbox";

export default function Gallery({ gallery = [], wedding }) {
  const VISIBLE = 4;                 // 4 tiles visible
  const n = gallery.length;

  const [idx, setIdx] = useState(n || 0); // start at middle block
  const [anim, setAnim] = useState(true); // enable/disable CSS transition
  const [showLightbox, setShowLightbox] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // triple list for seamless wrap
  const tripled = useMemo(() => [...gallery, ...gallery, ...gallery], [gallery]);

  // shift % = tiles moved * (100 / VISIBLE)
  const shiftPct = -(idx * (100 / VISIBLE));

  const canSlide = n > VISIBLE;

  const next = () => {
    if (!canSlide) return;
    setAnim(true);
    setIdx((i) => i + 1);
  };

  const prev = () => {
    if (!canSlide) return;
    setAnim(true);
    setIdx((i) => i - 1);
  };

  // After the transition, if we’ve scrolled out of the middle block,
  // jump back by +/- n without animation to keep it infinite.
  const onTransitionEnd = () => {
    if (!canSlide || n === 0) return;
    if (idx >= 2 * n) {
      setAnim(false);
      setIdx((i) => i - n);
    } else if (idx < n) {
      setAnim(false);
      setIdx((i) => i + n);
    }
  };

  // Re-enable animation after the “teleport”
  const onTransitionStart = () => {
    if (!anim) {
      // in next tick re-enable
      requestAnimationFrame(() => setAnim(true));
    }
  };

  // Current window [idx .. idx+3] is visible.
  // Clicking a tile should open the real image index (mod n).
  const openAtAbsolute = (absoluteIndexInTripled) => {
    const real = ((absoluteIndexInTripled % n) + n) % n; // modulo
    setStartIndex(real);
    setShowLightbox(true);
  };

  return (
    <section id="gallery" className="section py-3 section--blush">
      <Container>
        <div className="sectionCard">
          <h2 className="mb-3 title--lux">
            Зургийн цомог <span className="titleAccent" />
          </h2>

          <div className="galleryViewport">
            {/* Left arrow */}
            {canSlide && (
              <button
                className="galleryArrow galleryArrow--left"
                aria-label="Previous"
                onClick={prev}
              >
                ‹
              </button>
            )}

            {/* Track (all tiles) */}
            <div
              className={`galleryTrack ${anim ? "with-anim" : ""}`}
              style={{ transform: `translateX(${shiftPct}%)` }}
              onTransitionEnd={onTransitionEnd}
              onTransitionStart={onTransitionStart}
            >
              {tripled.map((src, i) => (
                <button
                  key={i}
                  className="galleryTile"
                  onClick={() => openAtAbsolute(i)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>

            {/* Right arrow */}
            {canSlide && (
              <button
                className="galleryArrow galleryArrow--right"
                aria-label="Next"
                onClick={next}
              >
                ›
              </button>
            )}
          </div>

          <div className="text-center mt-4">
            <Button
              className="btn--pink"
              onClick={() => {
                setStartIndex(0);
                setShowLightbox(true);
              }}
            >
              Бүх зураг харах
            </Button>
          </div>

          <Lightbox
            show={showLightbox}
            onClose={() => setShowLightbox(false)}
            images={gallery}
            title="Бүх зураг"
            startIndex={startIndex}
          />

          <p className="text-center mt-3 text-muted">
            Зургаа <strong>{wedding?.hashtag}</strong> хаштагтай хуваалцаарай.
          </p>
        </div>
      </Container>
    </section>
  );
}
