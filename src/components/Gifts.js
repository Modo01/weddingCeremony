// src/components/Gifts.js
import React, { useState } from "react";
import { Container, Row, Col, Button, Image, Modal } from "react-bootstrap";
import giftIMG from "../assets/gift.jpg";

export default function Gifts({ bank }) {
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);

  const copyAccount = async () => {
    try {
      const num = bank?.accountNumber ?? "";
      if (!num) {
        alert("Дансны дугаар байхгүй байна.");
        return;
      }
      await navigator.clipboard.writeText(num);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Хуулах боломжгүй байна. Дахин оролдоно уу.");
    }
  };

  return (
    <section id="gifts" className="section py-3 section--blush">
      <Container>
        <div className="sectionCard">
          <h2 className="mb-3 title--lux">
            Бэлэг
            <span className="titleAccent" />
          </h2>

          <Row className="align-items-center g-4">
            {/* Left: Message + Trigger */}
            <Col xs={12} md={6} lg={5} className="mx-auto">
              <p className="mb-3 text-muted">
                <strong className="d-block mb-1" style={{ color: "var(--rp-ink)" }}>
                  Таны залбирал, оролцоо бол бидний хувьд хамгийн том бэлэг.
                </strong>
                Хэрэв та биечлэн хүрэлцэн ирж чадахгүй байсан ч сэтгэлийн халуун мэндчилгээгээ
                бэлэг хэлбэрээр илгээхийг хүсвэл, доорх товчийг дарна уу. 🧡💖
              </p>

              <Button className="btn--pink" onClick={() => setShow(true)}>
                Бэлэг илгээх
              </Button>
            </Col>

            {/* Right: Photo */}
            <Col xs={12} md={6} lg={7} className="d-flex justify-content-center">
              <div className="giftImgWrap">
                <Image
                  src={giftIMG}
                  alt="Бэлэгийн зураг"
                  loading="lazy"
                  rounded
                  width={1200}
                  height={600}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>
        </div>

        {/* Modal with bank details */}
        <Modal
          show={show}
          onHide={() => setShow(false)}
          centered
          aria-labelledby="gift-modal-title"
          dialogClassName="giftModalDialog"        // ⬅️ optional wider dialog
          contentClassName="giftModalContent"     
        >
          <Modal.Header closeButton>
            <Modal.Title id="gift-modal-title">Бэлгийн мэдээлэл</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {bank?.note && <p className="text-muted small mb-3 giftNote">{bank.note}</p>}

            <div className="p-3 bg-white border rounded giftCard">
              <div className="giftRow">
                <span className="text-muted">Банк</span>
                <strong>{bank?.bankName ?? "—"}</strong>
              </div>
              <div className="giftRow">
                <span className="text-muted">Дансны нэр</span>
                <strong>{bank?.accountName ?? "—"}</strong>
              </div>
              <div className="giftRow">
                <span className="text-muted">Дансны дугаар</span>
                <strong className="giftAccount">{bank?.accountNumber ?? "—"}</strong>
              </div>

              <div className="mt-3 d-flex gap-2 flex-wrap justify-content-center">
                <Button className="btn--pink" onClick={copyAccount} disabled={!bank?.accountNumber}>
                  {copied ? "Хуулсан!" : "Дансны дугаарыг хуулах"}
                </Button>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="justify-content-center">
            <Button variant="light" onClick={() => setShow(false)}>
              Хаах
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}
