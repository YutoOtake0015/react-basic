import React from "react";

const Sample1 = (props) => {
  const clickHandlar = () => {
    console.log("clicked");
  };

  return (
    <>
      <button onClick={clickHandlar}>click</button>
      <h1>hello {props.name}</h1>
      <h1>hello react 2</h1>
    </>
  );
};

export default Sample1;
