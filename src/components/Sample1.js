import React, { useState } from "react";

const Sample1 = (props) => {
  const clickHandlar = () => {
    console.log("clicked");
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount((prevCont) => prevCont + 1);
          setCount((a) => a + 1);
        }}
      >
        click {count}
      </button>

      <h1>hello {props.name}</h1>
      <h1>hello react 2</h1>
    </>
  );
};

export default Sample1;
