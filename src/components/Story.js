// src/components/Story.js
import React from "react";
import { Container } from "react-bootstrap";

export default function Story() {
  const storyText =
    "Бидний учрал бол санамсаргүй тохиолдол бус, харин Бурханы хүслээр заяасан учрал байсан. Эхэндээ богинохон яриа байсан ч тэр мөч сэтгэлд тод үлдэж, цаашдын аяллын эхлэл болсон юм. Удалгүй бидний харилцаа илүү ойртож, бие биедээ итгэж, хамтдаа инээж, суралцаж, аялж, олон дурсамж бүтээсэн. Энэ бүх хугацаанд бид нэгнээ олон өнцгөөс харж, таньж мэдэн, хайр, нөхөрлөл, итгэл дээрээ тулгуурлан харилцаагаа бататгасан. Сорилт, бэрхшээл, баяр хөөрийн дунд Бурхан биднийг алхам бүрд удирдаж, нэг нэгэндээ түшиг тулгуур болохын үнэ цэнийг ойлгуулсан. Ингээд бид нэгнээ албан ёсоор сонгож, Бурханы өмнө амьдралаа нэгтгэн эхлүүлэхээр шийдсэн нь бидний хамгийн гайхамшигтай аяллын эхлэл юм.";

  return (
    <section id="story" className="section py-3 section--blush">
      <Container>
        <div className="sectionCard storySingle">
          <h2 className="mb-3 title--lux">
            Бидний хайрын түүх
            <span className="titleAccent" />
          </h2>

          <p className="storyTextProse">
            {storyText}
          </p>
        </div>
      </Container>
    </section>
  );
}
