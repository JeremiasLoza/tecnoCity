import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import products from "../../utils/products.mock";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});

  const { id } = useParams();

  useEffect( () => {
    filterById();
  }, [id]);

  const filterById = () => {
    products.some( (product) => {
      if(product.id == id){
        setProductData(product);
      }
    })
  }

  return (
    <>
      <ItemDetail data={productData} />;
    </>
  );
};

export default ItemDetailContainer;
