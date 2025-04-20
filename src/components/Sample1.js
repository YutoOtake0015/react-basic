import React, { useState } from "react";

const Sample1 = () => {
  const [products, setProducts] = useState({ name: "", price: "" });

  return (
    <>
      <form>
        <input
          type="text"
          value={products.name}
          onChange={(evt) =>
            setProducts({ ...products, name: evt.target.value })
          }
        />
        <input
          type="text"
          value={products.price}
          onChange={(evt) =>
            setProducts({ ...products, price: evt.target.value })
          }
        />
      </form>
      <h3>Product Name is {products.name}</h3>
      <h3>Product Price is {products.price}</h3>
    </>
  );
};

export default Sample1;
