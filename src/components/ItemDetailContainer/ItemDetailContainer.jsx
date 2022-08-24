import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});

  const { id } = useParams();

  useEffect( () => {
    getProduct()
    .then( (res) => {
      setProductData(res);
    })
  }, [id]);

  const getProduct = async () => {
    const docRef = doc(db, 'productos', id);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;

    return product;
  }

  return (
    <>
      <ItemDetail data={productData} />;
    </>
  );
};

export default ItemDetailContainer;
