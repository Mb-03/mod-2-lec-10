import { useState, useEffect } from "react";

const Clock = () => {
  const [timer, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function formatTime() {
    let hours = timer.getHours();
    let minutes = timer.getMinutes();
    let seconds = timer.getSeconds();
    let meridiem = hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default Clock;
