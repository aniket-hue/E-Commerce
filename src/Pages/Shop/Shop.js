import React from "react";
import Shopitem from "../../Components/Shopitem/Shopitem";

const Shop = () => {
  return (
    <div>
      <h1 style={{ fontWeight: "bolder", fontSize: "35px" }}>Collections</h1>
      <Shopitem type="hats" amount={4} />
      <Shopitem type="sneakers" amount={4} />
      <Shopitem type="jackets" amount={4} />
      <Shopitem type="womens" amount={4} />
      <Shopitem type="mens" amount={4} />
    </div>
  );
};

export default Shop;
