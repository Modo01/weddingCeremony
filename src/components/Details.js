// src/components/Details.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Details({ wedding, timeline, title = "Баярын өдөр" }) {
  return (
    <section id="details" className="section py-3 section--blush">
      <Container>
        <div className="sectionCard">
          <h2 className="mb-3 title--lux">
            {title}
            <span className="titleAccent" />
          </h2>

          <Row className="g-4">
            {/* Timeline */}
            <Col xs={12} md={6}>
              <div className="timeline">
                {timeline.map((item, index) => (
                  <div
                    className="tItem"
                    key={index}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "90px 1fr",
                      gap: "8px 12px",
                      padding: "10px 4px",
                    }}
                  >
                    <div className="tDot" />
                    <div className="tTime">{item.time}</div>
                    <div className="tContent">
                      <h5 className="tTitle mb-1">{item.title}</h5>
                      {item.desc && (
                        <p className="tDesc text-muted mb-0">{item.desc}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            {/* Venue */}
            <Col xs={12} md={6}>
              <Card className="venueCard shadow-sm">
                <Card.Body>
                  <Card.Title className="venueTitle">{wedding.venueName}</Card.Title>
                  <Card.Text className="venueAddr text-muted">{wedding.venueAddress}</Card.Text>

                  <div className="mapWrap">
                    <iframe
                      title="venue-map"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        wedding.mapQuery
                      )}&output=embed`}
                      width="100%"
                      height="260"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="text-center mt-3">
                    <Button
                      className="btn--pink"
                      href={wedding.mapOpenUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google газрын зураг нээх
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
