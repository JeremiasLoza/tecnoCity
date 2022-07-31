import React, { useEffect, useState } from "react";
import products from "../../utils/products.mock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [listProducts, setListProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  useEffect(() => {
    getProducts
      .then((res) => {
        setListProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {listProducts.map((product) => {
        return <ItemDetail key={product.id} data={product} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
