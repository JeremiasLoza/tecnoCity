import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebaseConfig";
import { useParams } from "react-router-dom";

function ItemListContainer({ title }) {
  const [listProducts, setListProducts] = useState([]);

  const { categoryId } = useParams();

  const getProducts = async () => {
    const productCollection = collection(db, "productos");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });

    return productList;
  };

  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res);
    });
  }, []);

  return (
    <div>
      <h2 className="mt-3 mb-3 text-center">{title}</h2>

      <Container>
        <Row className="justify-content-around">
          {categoryId ? (
            <ItemList
              dataProduct={listProducts.filter(
                (product) => product.category == categoryId
              )}
            />
          ) : (
            <ItemList dataProduct={listProducts} />
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ItemListContainer;
