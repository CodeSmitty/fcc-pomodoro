import { useState, useEffect } from "react";

const Session = ({ session, startTimer, sessionIncDec, timer }) => {
  const handleIncrement = () => {
    const newLength = session + 1;
    if (session != 60) {
      sessionIncDec(newLength);
      timer(newLength * 60);
    }
  };

  const handDecrement = () => {
    const newLength = session - 1;
    if (session != 1) {
      sessionIncDec(newLength);
      timer(newLength * 60);
    }
  };

  return (
    <div>
      <div>
        <label id="session-label">Session Length</label>
        <p id="session-length">{session}</p>
      </div>
      <button id="session-increment" onClick={handleIncrement}>
        increment
      </button>
      <button id="session-decrement" onClick={handDecrement}>
        decrement
      </button>
    </div>
  );
};

export default Session;