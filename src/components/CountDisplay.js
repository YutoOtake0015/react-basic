import React from "react";

const CountDisplay = ({ name, count }) => {
  console.log(`display ${name}`);

  return <div>Count {count}</div>;
};

export default React.memo(CountDisplay);
