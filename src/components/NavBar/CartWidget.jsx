import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import "./CartWidget.scss";
import { CartContext } from "../../context/CartContext";
import Modal from "react-bootstrap/Modal";
import CartComponent from "../Cart/Cart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartProducts, totalProducts, clear } = useContext(CartContext);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button
        onClick={() => setLgShow(true)}
        className="shadow-none no-border ms-1"
        variant="outline-primary"
      >
        <Cart />
        <Badge bg="none">
          {cartProducts.length !== 0 ? totalProducts : ""}
        </Badge>
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
          {cartProducts.length !== 0 ? (
            cartProducts.map((item, i) => {
              return <CartComponent key={i} product={item} />;
            })
          ) : (
            <h4>No tienes productos en el carrito!</h4>
          )}

          {cartProducts.length !== 0 && (
            <div className="d-flex justify-content-between">
              <Button className="mt-2 btn-danger" onClick={() => clear()}>
                Vaciar carrito
              </Button>
              <Link to="/cart">
                <Button className="mt-2" onClick={() => setLgShow(false)}>
                  Terminar compra
                </Button>
              </Link>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartWidget;
