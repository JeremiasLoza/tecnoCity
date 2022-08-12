import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import "./CartWidget.scss";
import { CartContext } from "../../context/CartContext";
import Modal from "react-bootstrap/Modal";

const CartWidget = () => {
  const { cartProducts } = useContext(CartContext);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button
        onClick={() => setLgShow(true)}
        className="shadow-none no-border ms-1"
        variant="outline-primary"
      >
        <Cart />
        <Badge bg="none">0</Badge>
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartProducts.map((product) => {
            return (
              <>
                <h2>{product.title}</h2>
                <h4>$ {product.price}</h4>
              </>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartWidget;
