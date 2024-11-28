import { useState, useEffect } from "react";

const Break = ({ breakLength, breakActive }) => {
  const [baseBreak, setBaseBrake] = useState(5);

  const decrement = () => {
    console.log("hola");
    if (baseBreak != 1) {
      setBaseBrake(baseBreak - 1);
      if (breakActive) {
        breakLength(baseBreak);
      }
    }
  };

  const increment = () => {
    setBaseBrake(baseBreak + 1);
    breakLength(baseBreak);
  };

  useEffect(() => {
    setBaseBrake(5);
  }, [setBaseBrake]);

  return (
    <div>
      <label id="break-label">Break Length</label>
      <p id="break-length">{baseBreak}</p>
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
