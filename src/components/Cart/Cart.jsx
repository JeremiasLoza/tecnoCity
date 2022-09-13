import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Image } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import db from "../../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext.jsx";

const Cart = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    cartProducts,
    totalPrice,
    removeProductFromCart,
    totalProducts,
    getProductQuantity,
  } = useContext(CartContext);
  const [success, setSuccess] = useState();

  const [order, setOrder] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
      };
    }),
    buyer: {},
    date: new Date().toLocaleString(),
    total: totalPrice,
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    pushData({ ...order, buyer: formData });
  };

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, "ordenes");
    const orderDoc = await addDoc(collectionOrder, newOrder);
    setSuccess(orderDoc.id);
  };

  return (
    <Container>
      <Row>
        <Col lg="2">
          <Image fluid src={`/assets/Products/${product.photo}`} />
        </Col>
        <Col>
          <h4>{product.title}</h4>
          <Row>
            <h5>
              {getProductQuantity(product)} x $ {product.price}
            </h5>
          </Row>

          <Row>
            <h5>Total: $ {getProductQuantity(product) * product.price}</h5>
          </Row>
        </Col>
        <Col md="auto" className="align-self-center">
          <Button
            variant="outline-danger"
            onClick={() => removeProductFromCart(product)}
          >
            <Trash />
          </Button>
        </Col>
      </Row>
      <hr className="mt-3" />
    </Container>
  );
};

export default Cart;
