import React from "react";
import Item from "../Item/Item";

const ItemList = ({ dataProduct }) => {
  return (
    <>
      {dataProduct.map((product) => {
        return <Item key={product.id} data={product} />;
      })}
    </>
  );
};

export default ItemList;
