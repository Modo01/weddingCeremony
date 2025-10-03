// src/config.js
export const COUPLE = { bride: "Гүнжээ", groom: "Мөдө" };

export const WEDDING = {
    dateISO: "2025-10-11T12:00:00",
    churchName: "Авралын зар чуулган",
    venueName: "Авралын зар чуулган",
    venueAddress: "121, 5-р хороо, Баянгол дүүрэг, Улаанбаатар",
    mapQuery: "121, BGD - 5 khoroo, Ulaanbaatar 16081",
    mapOpenUrl: "https://maps.app.goo.gl/cGtrQKZKBU5Hv8st6",
    hashtag: "#Modo&Gunjee2025",
};

export const BANK = {
    bankName: "Хаан банк",
    accountName: "Мөнхдөлгөөн",
    accountNumber: "640005005309263590",
    note: "Гүйлгээний утгад өөрийн нэрээ бичээрэй.",
};

export const TIMELINE1 = [
    { time: "12:00", title: "Ёслол эхлэх", desc: "Зочид чуулганд орж ирэн суудлаа олж сууцгаан Гэрлэх ёслол эхэлнэ." },
    { time: "13:00", title: "Номлол", desc: "Пастор номлол хийх бөгөөд хоёр хосыг адислах болно." },
    { time: "13:00", title: "Ерөөл", desc: "Хоёр хосыг аав ээж нар ерөөн залбирна. " },
    { time: "14:00", title: "Ёслол дуусах", desc: "Ёслолын үйл ажиллагаа дуусан, хоёр хосыг үдэж өгнө." },
];

export const GALLERY = [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600",
    `${process.env.PUBLIC_URL}/images/gibly_wedding_1.png`,
    `${process.env.PUBLIC_URL}/images/gibly_wedding_2.png`,
];
