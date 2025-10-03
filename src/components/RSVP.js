import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState({ show: false, variant: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rsvpData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      guestsAdult: e.target.guestsAdult.value,
      guestsKid: e.target.guestsKid.value,
      attend: e.target.attend.value,
      timestamp: new Date().toISOString(),
    };
    try {
      await addDoc(collection(db, "rsvp"), rsvpData);
      setAlert({ show: true, variant: "success", message: "Баярлалаа! Таны ирэх эсэхийн мэдээлэл бүртгэгдлээ." });
      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      console.error("Firestore-д бичихэд алдаа:", err);
      setAlert({ show: true, variant: "danger", message: "Алдаа гарлаа. Дахин оролдоно уу." });
    }
  };

  return (
    <section id="rsvp" className="section py-3 section--blush">
      <Container>
        <div className="sectionCard">
          <h2 className="mb-3 title--lux">
            Ирэх эсэх
            <span className="titleAccent" />
          </h2>

          {alert.show && (
            <Alert
              variant={alert.variant}
              dismissible
              onClose={() => setAlert({ ...alert, show: false })}
              className="text-center alert--round"
            >
              {alert.message}
            </Alert>
          )}

          {submitted ? (
            <p className="text-center text--success-pink">Таны мэдээлэл бүртгэгдлээ. Баярлалаа!</p>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="rsvpName" className="mb-3">
                    <Form.Label>Овог нэр</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Овог нэр" required className="input--soft" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="rsvpEmail" className="mb-3">
                    <Form.Label>И-мэйл</Form.Label>
                    <Form.Control type="email" name="email" placeholder="И-мэйл" required className="input--soft" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="rsvpPhone" className="mb-3">
                    <Form.Label>Утас</Form.Label>
                    <Form.Control type="tel" inputMode="numeric" name="phone" placeholder="Утасны дугаар" className="input--soft" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="guestsAdult" className="mb-3">
                    <Form.Label>Том хүний тоо</Form.Label>
                    <Form.Control type="number" name="guestsAdult" placeholder="Том хүний тоо" required min={1} className="input--soft" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="guestsKid" className="mb-3">
                    <Form.Label>Хүүхдийн тоо</Form.Label>
                    <Form.Control type="number" name="guestsKid" placeholder="Хүүхдийн тоо" className="input--soft" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label><strong>Ирэх эсэх</strong></Form.Label>
                    <div className="d-flex flex-wrap gap-3 radios--row">
                      <Form.Check type="radio" name="attend" value="both" label="2ууланд нь очно" defaultChecked />
                      <Form.Check type="radio" name="attend" value="ceremony" label="Ёслолд л очно"  />
                      <Form.Check type="radio" name="attend" value="party" label="Цайллаганд л очно" />
                      <Form.Check type="radio" name="attend" value="no" label="Очиж амжихгүй эсвэл боломжгүй байна." />

                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Санал хүсэлт</Form.Label>
                <Form.Control as="textarea" name="message" placeholder="Мессеж үлдээнэ үү" rows={4} className="input--soft" />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" className="btn--pink">Илгээх</Button>
              </div>
            </Form>
          )}
        </div>
      </Container>
    </section>
  );
}
