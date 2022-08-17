import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Image } from "react-bootstrap";

const Cart = ({product}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image fluid src={`/assets/Products/${product.photo}`} />
        </Col>
        <Col>
          <h3>{product.title}</h3>
          <Row>
            <h4>$ {product.price}</h4>
          </Row>
        </Col>
        <Col>
          <Button className="float-to-right" variant="primary">
            Eliminar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
