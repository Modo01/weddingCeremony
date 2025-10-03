// src/hooks/useCountdown.js
import { useState, useEffect } from "react";
import { getRemain } from "../utils/countdown"; // your existing function

export default function useCountdown(targetDate) {
    const [remain, setRemain] = useState(getRemain(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setRemain(getRemain(targetDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return remain;
}
