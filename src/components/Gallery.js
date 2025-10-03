// src/components/Gallery.js
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Lightbox from "./Lightbox";

export default function Gallery({ gallery, wedding }) {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <section id="gallery" className="section py-3 section--blush">
      <Container>
        <div className="sectionCard">
          <h2 className="mb-3 title--lux">
            Зургийн цомог
            <span className="titleAccent" />
          </h2>

          {/* Grid */}
          <Row className="g-3 galleryGrid">
            {gallery.map((src, index) => (
              <Col key={index} xs={6} md={3}>
                <figure className="galleryItem">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img src={src} className="galleryImg" />
                </figure>
              </Col>
            ))}
          </Row>

          {/* Open lightbox */}
          <div className="text-center mt-4">
            <Button className="btn--pink" onClick={() => setShowLightbox(true)}>
              Бүх зураг харах
            </Button>
          </div>

          {/* Lightbox */}
          <Lightbox
            show={showLightbox}
            onClose={() => setShowLightbox(false)}
            images={gallery}
            title="Бүх зураг"
          />

          <p className="text-center mt-3 text-muted">
            Зургаа <strong>{wedding.hashtag}</strong> хаштагтай хуваалцаарай.
          </p>
        </div>
      </Container>
    </section>
  );
}
