import { useState, useEffect } from "react";

const Counter = () => {
  const [state, setstate] = useState(0);
  const onButtonClick = () => {
    setstate(state + 1);
  };

  useEffect(() => {
    document.title = state;
  }, [state]);

  useEffect(() => {
    if (state === 5) setstate(6);
  }, [state]);

  return (
    <>
      <div
        style={{ flexWrap: "wrap", display: "flex", alignContent: "center" }}
      >
        <p
          data-testid="counter-number"
          className=" text-white left-5"
          style={{
            borderRadius: "90px",
            padding: "6px",
            margin: "5px",
            backgroundColor: "#FAAB78",
          }}
        >
          {state}
        </p>
        <button
          data-testide="counter-button"
          onClick={onButtonClick}
          className="bg-indigo-600 text-white left-2"
          style={{
            borderRadius: "5px",
            padding: "6px",
            backgroundColor: "#FFDCA9",
          }}
        >
          click here
        </button>
      </div>
    </>
  );
};
export default Counter;
