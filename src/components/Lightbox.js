// src/components/Lightbox.js
import React from "react";
import { Modal, Row, Col, Image, Button } from "react-bootstrap";

export default function Lightbox({ show, onClose, images, title = "Бүх зураг" }) {
    return (
        <Modal
            show={show}
            onHide={onClose}
            size="xl"
            aria-labelledby="lightbox-modal"
            centered
            dialogClassName="lightboxDialog"
            contentClassName="lightboxContent"
        >
            <Modal.Header closeButton className="border-0">
                <Modal.Title id="lightbox-modal" className="w-100 text-center title--lux">
                    {title}
                    <div className="titleAccent"></div>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row className="g-3">
                    {images.map((src, index) => (
                        <Col key={index} xs={6} md={3} className="galleryItem">
                            <Image
                                src={src}
                                alt={`lightbox-${index}`}
                                className="galleryImg"
                            />
                        </Col>
                    ))}
                </Row>
            </Modal.Body>

            <Modal.Footer className="justify-content-center border-0">
                <Button variant="light" className="btn--pink px-4" onClick={onClose}>
                    Хаах
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
