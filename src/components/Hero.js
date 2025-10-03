// src/components/Hero.js
import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Count from "./Count";
import useCountdown from "../hooks/useCountdown";
import Flowers from "../assets/Flowers.png";

export default function Hero({ couple, wedding, formatDate }) {
  const targetDate = new Date(wedding.dateISO);
  const remain = useCountdown(targetDate);

  return (
    <section
      id="hero"
      className="heroFit text-center text-white position-relative"
      style={{
        height:"100vh",
        /* fit content, not full screen */
        padding: "72px 0",
        background:
          "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2400') center/cover no-repeat",
        fontFamily: "'Playfair Display', Georgia, serif", // changed font
      }}
    >
      {/* Orange→Pink gradient overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45))",
          inset: 0,
        }}
      />

      <Container className="position-relative">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            {/* Flowers */}
            <Image
              src={Flowers}
              alt="Flowers"
              fluid
              className="mb-3"
             style={{ maxWidth: "200px", position: "relative", top: "-12vh" }}

            />

            <p className="text-uppercase opacity-75 mb-2" style={{ letterSpacing: 2 }}>
              Бид гэрлэж байна
            </p>

            {/* Names with gradient accent */}
            <h1
              className="mb-2 heroNames"
              style={{
                fontSize: "clamp(36px, 7vw, 64px)",
                lineHeight: 1.1,
              }}
            >
              <span className="heroGradientText">{couple.groom}</span> &{" "}
              <span className="heroGradientText">{couple.bride}</span>
            </h1>
          
            <p className="opacity-75 mb-4">
              {formatDate(targetDate)} • {wedding.churchName}
            </p>
          

            {/* Countdown */}
            <div className="d-flex justify-content-center gap-3 mb-4 p-3 rounded heroCounter">
              <Count label="Өдөр" value={remain.days} />
              <Count label="Цаг" value={remain.hours} />
              <Count label="Минут" value={remain.minutes} />
              <Count label="Секунд" value={remain.seconds} />
            </div>

            {/* Button (use your themed pink) */}
            <Button
              href="#rsvp"
              size="lg"
              className="btn--pink rounded-pill px-4 py-2"
            >
              Хуриманд оролцох
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
