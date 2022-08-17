import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import products from "../../utils/products.mock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ title }) {
  const [listProducts, setListProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
      resolve(products);
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
      <h2 className="mt-3 mb-3 text-center">{title}</h2>

      <Container>
        <Row className="justify-content-around">
          <ItemList dataProduct={listProducts} />
        </Row>
      </Container>
    </div>
  );
}

export default ItemListContainer;
