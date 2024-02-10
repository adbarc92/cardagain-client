import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const AnalogClock = (): JSX.Element => {
  const [clockValue, setClockValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setClockValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Clock value={clockValue} />;
};

export default AnalogClock;
