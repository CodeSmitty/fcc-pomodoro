import { useState, useEffect } from "react";
import Session from "../components/session";
import Break from "../components/break";

export const Clock = ({}) => {
  const [initialMinutes, setInitialMinutes] = useState(25);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [startStopTimer, setStartStopTimer] = useState(false);
  const [sessionLength, setSessionLength] = useState(25);
  const [isBreakActive, setIsBreakActive] = useState(false);

  const resetTimer = () => {
    setInitialMinutes(25);
    setInitialSeconds(0);
    setStartStopTimer(!startStopTimer);
    setSessionLength(25);
  };

  const resetState = () => {
    setInitialMinutes(25);
    setInitialSeconds(0);
    setSessionLength(25);
  };

  const sessionTimer = (newState) => {
    if (newState === "increment") {
      setInitialMinutes(sessionLength + 1);
      setSessionLength(sessionLength + 1);
    } else if (newState === "decrement") {
      setInitialMinutes(sessionLength - 1);
      setSessionLength(sessionLength - 1);
    }
  };

  useEffect(() => {
    resetState();
  }, []);

  useEffect(() => {
    let interval;

    if (startStopTimer) {
      if (initialMinutes > 0 || initialSeconds > 0) {
        interval = setInterval(() => {
          if (initialSeconds > 0) {
            setInitialSeconds(initialSeconds - 1);
          } else if (initialMinutes > 0 || initialSeconds === 0) {
            setInitialMinutes(initialMinutes - 1);
            setInitialSeconds(59);
          }
        }, 1000);
      } else {
        clearInterval(interval);
      }
    }

    return () => clearInterval(interval);
  }, [initialMinutes, initialSeconds, startStopTimer]);

  const minutes = initialMinutes.toString().padStart(2, "0");
  const seconds = initialSeconds.toString().padStart(2, "0");

  if (minutes === "00" && seconds === "00") {
    setIsBreakActive(true);
  }

  return (
    <div>
      <div class="break-session-container">
        <div class="session-container">
          <Session
            session={sessionLength}
            onChangeSession={sessionTimer}
            startTimer={startStopTimer}
          />
        </div>
        <div class="break-container">
          <Break
            breakLength={(newState) => setInitialMinutes(newState)}
            breakActive={isBreakActive}
          />
        </div>
      </div>
      <div class="timer-container">
        <div>
          <label id="timer-label">Session</label>
          <p id="time-left">
            {minutes}:{seconds}
          </p>
        </div>
        <div>
          <button
            id="start_stop"
            onClick={() => setStartStopTimer(!startStopTimer)}
          >
            play/pause
          </button>
          <button id="reset" onClick={() => resetTimer()}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
};
