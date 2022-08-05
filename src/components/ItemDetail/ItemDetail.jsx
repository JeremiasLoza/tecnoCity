import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ItemCount from "../Item/ItemCount";
import { Truck } from "react-bootstrap-icons";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./ItemDetail.scss";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const { photo, title, price, stock } = data;

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

          <ItemCount stock={stock} />

          <Button
            // disabled={stock ? false : true}
            variant="outline-primary"
            className="mb-2"
          >
            Agregar al carrito
          </Button>

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
