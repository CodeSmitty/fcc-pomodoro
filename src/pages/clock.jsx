import { useState, useEffect, useRef } from "react";
import Session from "../components/session";
import Break from "../components/break";
import { Timer } from "../components/timer";
import Audio from "../components/audio";

export const Clock = ({}) => {
  const audio = useRef(undefined)

  const [startStopTimer, setStartStopTimer] = useState(false);
  const [sessionLength, setSessionLength] = useState(25);
  const [session, setSession] = useState("Break");
  const [countdownTimer, setCountdownTimer] = useState(25 * 60);
  const [breakSession, setBreakSession] = useState(5);

  const resetTimer = () => {
    audio.current.load()
    setStartStopTimer(false);
    setCountdownTimer(25 * 60);
    setSession("Session");
    setSessionLength(25);
    setBreakSession(5);
  };

  const resetState = () => {
    audio.current.load()
    setStartStopTimer(false);
    setSessionLength(25);
    setSession("Session");
    setBreakSession(5);
    setCountdownTimer(25 * 60);
  };

  useEffect(() => {
    resetState();
  }, []);

  useEffect(() => {
    let intervalId;
    if (startStopTimer) {
      intervalId = setInterval(() => {
        setCountdownTimer((prev) => {
          const newTimer = prev - 1;
          return newTimer;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [startStopTimer]);

  useEffect(() => {
    if (countdownTimer === -1) {
      audio.current.play()
      if (session === "Session") {
        console.log('timer: ', countdownTimer)
        setSession("Break");
        setCountdownTimer(breakSession * 60);
      } else {
        setCountdownTimer(sessionLength * 60);
        setSession("Session");
      }
    }
  }, [startStopTimer, sessionLength, countdownTimer, breakSession]);

  return (
    <div className="clock-container">
      <div>
        <Audio audio={audio} />
      </div>
      <div className="break-session-container">
        <div className="session-container">
          <Session
            session={sessionLength}
            startTimer={startStopTimer}
            sessionIncDec={setSessionLength}
            timer={setCountdownTimer}
          />
        </div>
        <div className="break-container">
          <Break sessions={breakSession} breakLength={setBreakSession} />
        </div>
      </div>
      <div className="timer-container">
          <Timer timer={countdownTimer} sessionType={session} />
          <div className="buttons">
            <button
              id="start_stop"
              onClick={() => setStartStopTimer(!startStopTimer)}
            >
              play/pause
            </button>
            <button id="reset" onClick={resetTimer}>
              reset
            </button>
          </div>
      </div>
    </div>
  );
};
