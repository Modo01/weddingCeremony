// src/components/Guestbook.js
import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

export default function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [alert, setAlert] = useState({ show: false, variant: "", message: "" });
  const listRef = useRef(null);

  useEffect(() => {
    // Listen to messages ordered by newest first
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
      // Optional: scroll to top whenever new message arrives
      if (listRef.current) listRef.current.scrollTo({ top: 0, behavior: "smooth" });
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const messageData = {
      message: form.message.value.trim(),
      fromWho: form.fromWho.value.trim(),
      timestamp: new Date().toISOString(),
    };
    if (!messageData.message || !messageData.fromWho) return;

    try {
      await addDoc(collection(db, "messages"), messageData);
      setAlert({
        show: true,
        variant: "success",
        message: "Баярлалаа! Мэндчилгээ амжилттай илгээгдлээ.",
      });
      form.reset();
    } catch (err) {
      console.error("Firestore-д бичихэд алдаа:", err);
      setAlert({
        show: true,
        variant: "danger",
        message: "Алдаа гарлаа. Дахин оролдоно уу.",
      });
    }
  };



  return (
    <section id="guestbook" className="section py-3 section--blush">
      <Container>
        <div className="sectionCard">
          <h2 className="mb-3 title--lux">
             Мэндчилгээ болон залбирал
            <span className="titleAccent" />
          </h2>

          {/* Alert */}
          {alert.show && (
            <Alert
              variant={alert.variant}
              onClose={() => setAlert({ ...alert, show: false })}
              dismissible
              className="alert--round text-center"
            >
              {alert.message}
            </Alert>
          )}

          {/* Intro + Form */}
          <p className="text-center mb-4 text-muted">
            Бидний баярыг хуваалцсан танд баярлалаа. Доорх хэсэгт сэтгэлийн үг болон залбирлаа үлдээгээрэй. 🧡💖
          </p>

          <Form onSubmit={handleSubmit} className="guestbookForm mb-5">
            <Form.Group controlId="message" className="mb-3">
              <Form.Label><strong>Мэндчилгээ болон залбирал</strong></Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Мэндчилгээ үлдээнэ үү"
                required
                className="input--soft"
              />
            </Form.Group>

            <Form.Group controlId="fromWho" className="mb-4">
              <Form.Label><strong>Хэнээс</strong></Form.Label>
              <Form.Control
                type="text"
                name="fromWho"
                placeholder="Таны нэр"
                required
                maxLength={60}
                className="input--soft"
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" className="btn--pink">
                Мэндчилгээ болон залбирал илгээх
              </Button>
            </div>
          </Form>

          {/* Manual scroll list */}
          <div className="mscrollWrap spacious">
            {messages.length === 0 ? (
              <div className="carouselCard text-center text-muted">
                Одоогоор мэндчилгээ алга байна. Та хамгийн түрүүнд үлдээгээрэй ✨
              </div>
            ) : (
              <>
                <div className="mscrollList roomy" ref={listRef}>
                  {messages.map((msg) => (
                    <div className="mscrollItem comfy" key={msg.id}>
                      <div className="quoteMark">“</div>
                        <div className="vscrollMeta">
                        <strong className="d-block">{msg.fromWho} <small className="text-muted">
                          {String(msg.timestamp || "").split("T")[0]}
                        </small></strong>
                        
                      </div>
                      <p className="mscrollMessage mb-3">{msg.message}</p>
                    
                    </div>
                  ))}
                </div>

              
              </>
            )}

            {/* fade masks */}
            <div className="mscrollMask top tall" />
            <div className="mscrollMask bottom tall" />
          </div>
        </div>
      </Container>
    </section>
  );
}
