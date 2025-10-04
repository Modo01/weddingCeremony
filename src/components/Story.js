// src/components/Story.js
import React from "react";
import { Container } from "react-bootstrap";
import "../styles/main.css";
import pic1 from "../assets/pic.jpg";

export default function Story() {
  const storyText =
    "Бидний учрал тохиолдлын биш, харин Бурханы онцгой бэлэг байлаа. Эхэндээ богинохон яриа байсан ч, тэр мөч сэтгэлд тод үлдэж, цаашдын аяллын эхлэл болсон юм. Сарын дараа бид хоёрын нөхөрлөл эргэлзэх зүйлгүйгээр үерхэл болон өөрчлөгдсөн. Цаг хугацаа өнгөрөх тусам итгэлцэл, инээд хөөрөөр харилцаагаа баяжуулж, хамтдаа суралцан аялж, мартагдашгүй олон дурсамжийг бид бүтээсэн. Тэр бүхний дунд нэгнээ жинхэнэ утгаар нь таньж, нөхөрлөл, хайр, үнэнч байдлыг сууриа болгон харилцаагаа улам батжуулсан билээ. Сорилт бас баяр хөөр дунд Бурхан биднийг удирдан чиглүүлж, нэг нэгэндээ түшиг тулгуур байх үнэт зарчмыг ойлгуулсан. Ийнхүү бид нэг нэгнээ эргэлзээгүйгээр, чин сэтгэлээсээ сонгон, Бурханы өмнө амьдралаа нэгтгэн, хамгийн агуу аяллын босгон дээр хамтдаа зогсож байна."
  return (
    <section id="story" className="section py-3 section--blush">
      <Container>
        <div
          className="sectionCard storySingle storyBg"
          style={{ backgroundImage: `url(${pic1})` }}   // desktop bg (cover)
        >
          {/* Phone-friendly image layer (shown only on small screens) */}
          <img
            src={pic1}
            alt=""
            aria-hidden="true"
            className="storyBgImg"   // becomes object-fit: contain on phones
          />

          <div className="storyInner">
            <h2 className="mb-2 title--lux">
              Бидний хайрын түүх
              <span className="titleAccent" />
            </h2>

            <p className="storyTextProse">{storyText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
