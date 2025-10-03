import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ bootstrap base styles
import "./styles/main.css"; // ✅ global theme

import { Home } from "./components/Home";
import { AdminRSVP } from "./components/AdminRSVP";

export default function App() {
    return (
        <Router basename="/weddingCeremony">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminRSVP />} />
            </Routes>
        </Router>
    );
}
