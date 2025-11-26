import { useEffect, useState } from "react";

export default function ClockKST() {
  const [timeStr, setTimeStr] = useState("00:00");
  const [ampm, setAmpm] = useState("AM");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const kstNow = new Date(utc + 3600000 * 9); // 한국 시간대 (UTC+9)

      let h = kstNow.getHours();
      let m = kstNow.getMinutes();
      let mid = "PM";

      if (m < 10) m = "0" + m;
      if (h > 12) {
        mid = "PM";
        h = h - 12;
      } else if (h === 0) {
        h = 12;
        mid = "AM";
      } else if (h < 12) {
        mid = "AM";
      }

      setTimeStr(`${h}:${m}`);
      setAmpm(mid);
    };

    updateClock();
    const timer = setInterval(updateClock, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="timeContainer">
      <div id="time">{timeStr}</div>
      <div id="ampm">{ampm}</div>
    </div>
  );
}
