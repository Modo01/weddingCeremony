// src/components/Footer.js
import React from "react";
import { Container } from "react-bootstrap";

export default function Footer({ couple, wedding }) {
    return (
        <footer className="py-4 bg-light border-top mt-5">
            <Container className="text-center">
                <p className="mb-0 text-muted">
                    © {new Date().getFullYear()} {couple.bride} & {couple.groom} • {wedding.hashtag}
                </p>
            </Container>
        </footer>
    );
}
