import React, { useState, useEffects, useEffect, use } from "react";

const SampleUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log("useEffect invoked");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />
    </div>
  );
};

export default SampleUseEffect;
