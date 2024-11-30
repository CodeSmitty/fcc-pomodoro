import { useState, useEffect } from "react";

const Break = ({ sessions, breakLength, timer }) => {
  const decrement = () => {
    if (sessions != 1) {
      breakLength(sessions - 1);
    }
  };

  const increment = () => {
    if (sessions != 60) {
      breakLength(sessions + 1);
    }
  };

  return (
    <div>
      <label id="break-label">Break Length</label>
      <p id="break-length">{sessions}</p>
      <button id="break-increment" onClick={() => increment()}>
        inrement
      </button>
      <button id="break-decrement" onClick={() => decrement()}>
        decrement
      </button>
    </div>
  );
};

export default Break;
