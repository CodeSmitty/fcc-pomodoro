export const Timer = ({ timer, sessionType }) => {
  const getTimer = () => {
    const minutes = Math.floor(timer / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timer % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const time = getTimer();

  return (
    <section>
      <h3 id="timer-label">{sessionType}</h3>
      <p id="time-left">{getTimer()}</p>
    </section>
  );
};
