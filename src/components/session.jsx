import { useState, useEffect } from "react";

const Session = ({ session, onChangeSession, startTimer }) => {
  const handleSession = (e) => {
    if (!startTimer) {
      const name = e.target.innerHTML;
      if (name === "increment") {
        onChangeSession("increment");
      } else if (name === "decrement" && session != 1) {
        onChangeSession("decrement");
      }
    }
  };

  return (
    <div>
      <div>
        <label id="session-label">Session Length</label>
        <p id="session-length">{session}</p>
      </div>
      <button id="session-increment" onClick={handleSession}>
        increment
      </button>
      <button id="session-decrement" onClick={handleSession}>
        decrement
      </button>
    </div>
  );
};

export default Session;
