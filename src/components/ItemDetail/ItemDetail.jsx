import { Container, Col, Row, Button } from "react-bootstrap";
import ItemCount from "../Item/ItemCount";
import { Truck } from "react-bootstrap-icons";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";
import { useState } from "react";

const ItemDetail = ({ data }) => {
  const { photo, title, price, stock } = data;

  const [quantitySelected, setQuantitySelected] = useState(0);

  return (
    <Container className="bg-white rounded mt-3">
      <Breadcrumb className="pt-2">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Producto</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="pt-2 pb-5">
        <Col>
          <img
            className="mt-2 img-fluid"
            variant="top"
            alt="Foto"
            src={`/assets/Products/${photo}`}
          />
        </Col>
        <Col className="text-center">
          <h3 className="mt-3" style={{ fontSize: "2rem" }}>
            {title}
          </h3>

          <hr width="75%" />

          <h4 className="text-primary" style={{ fontSize: "1.7rem" }}>
            $ {price}
          </h4>

          <hr width="75%" />

          <h6 className="mb-3">
            <Truck /> Envío a todo el país.
          </h6>

          <hr width="75%" />

          {quantitySelected > 0 ? (
            <Link to="/cart">
              <Button variant="outline-primary" className="mb-2">
                Terminar compra
              </Button>
            </Link>
          ) : (
            <ItemCount quantitySelected={setQuantitySelected} stock={stock} />
          )}

          <h6
            style={{ fontSize: "0.9rem" }}
            className={`${!stock ? "text-danger" : "text-dark"}`}
          >
            Stock: {stock}
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
