import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Image } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = ({product}) => {
  return (
    <Container>
      <Row>
        <Col lg="2">
          <Image fluid src={`/assets/Products/${product.photo}`} />
        </Col>
        <Col >
          <h4>{product.title}</h4>
          <Row>
            <h5>$ {product.price}</h5>
          </Row>
        </Col>
        <Col md='auto' className="align-self-center">
          <Button variant="outline-danger">
            <Trash />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
