// src/components/Count.js
import React from "react";

export default function Count({ label, value }) {
  const v = String(value).padStart(2, "0");

  return (
    <div
      className="countCard"
      style={{
        minWidth: "72px",
        borderRadius: "16px",
        padding: "12px 10px",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(3px)",
        border: "1px solid #f5d4d4",
        boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="countValue"
        style={{
          fontWeight: "700",
          fontSize: "1.6rem",
          background: "linear-gradient(135deg,#ff7e5f,#ff6aa8)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {v}
      </div>
      <div
        className="countLabel"
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#666",
        }}
      >
        {label}
      </div>
    </div>
  );
}
