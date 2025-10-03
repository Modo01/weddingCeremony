import React from "react";
import Hero from "./Hero";
import Story from ".//Story";
import Details from "./Details";
import Gallery from "./Gallery";
import Gifts from "./Gifts";
import Guestbook from "./Guestbook";
import RSVP from "./RSVP";
import Footer from "./Footer";

import {COUPLE, WEDDING ,BANK, TIMELINE1, GALLERY} from "../config";
import {formatDateLongMN} from "../utils/date";

export function Home() {
    return (
        <div className="site">
            <Hero couple={COUPLE} wedding={WEDDING} formatDate={formatDateLongMN}/>
            <Story/>
            <Details wedding={WEDDING} timeline={TIMELINE1} title="Ёслолын дэлгэрэнгүй" />
            <Gallery gallery={GALLERY} wedding={WEDDING}/>
            <Gifts bank={BANK}/>
            <Guestbook/>
            <RSVP/>
            <Footer couple={COUPLE} wedding={WEDDING}/>
        </div>);
}
