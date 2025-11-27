import { useEffect, useState } from "react";

// 한국 표준시 시계 컴포넌트
export default function ClockKST() {
  // 시간 문자열 상태
  const [timeStr, setTimeStr] = useState("00:00");
  // AM/PM 상태
  const [ampm, setAmpm] = useState("AM");

  // 시간 업데이트 효과
  useEffect(() => {
    // 시간 계산 및 상태 업데이트 함수
    const updateClock = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const kstNow = new Date(utc + 3600000 * 9); // 한국 시간대 (UTC+9)

      // 시간, 분 계산
      let h = kstNow.getHours();
      let m = kstNow.getMinutes();
      let mid = "PM";

      // 10보다 작으면 앞에 0 붙이기
      if (m < 10) m = "0" + m;
      // AM/PM 및 12시간제 변환
      if (h > 12) {
        mid = "PM";
        h = h - 12;
        // 12시는 PM
      } else if (h === 0) {
        h = 12;
        mid = "AM";
        // 오전 12시~11시는 AM
      } else if (h < 12) {
        mid = "AM";
      }

      // 상태 업데이트
      setTimeStr(`${h}:${m}`);
      // AM/PM 상태 업데이트
      setAmpm(mid);
    };
    // 초기 호출 및 500ms마다 업데이트 설정
    updateClock();
    const timer = setInterval(updateClock, 500);
    // 클린업 함수: 타이머 해제
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="timeContainer">
      <div id="time">{timeStr}</div>
      <div id="ampm">{ampm}</div>
    </div>
  );
}
