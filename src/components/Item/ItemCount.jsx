import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ quantitySelected, stock, productData }) => {
  const [count, setCount] = useState(1);

  const { addProductToCart, setTotalProducts, modifyQuantity } =
    useContext(CartContext);

  const editItem = (num) => {
    setCount(count + num);
  };

  const onAdd = () => {
    quantitySelected(count);
    productData.quantity = count;
    addProductToCart(productData);
    modifyQuantity(count);
  };

  return (
    <>
      <ButtonToolbar className="mb-3 justify-content-center">
        <ButtonGroup>
          <Button
            onClick={() => editItem(-1)}
            disabled={count === 1}
            variant={`${!stock ? "secondary" : "primary"}`}
          >
            -
          </Button>
          <InputGroup>
            <Form.Control
              className="text-center"
              placeholder={stock ? count : stock}
              disabled
            />
          </InputGroup>
          <Button
            onClick={() => editItem(1)}
            disabled={stock === count || stock === 0}
            variant={`${!stock ? "secondary" : "primary"}`}
          >
            +
          </Button>
        </ButtonGroup>
      </ButtonToolbar>

      <Button
        onClick={() => {
          onAdd();
        }}
        disabled={stock ? false : true}
        variant="outline-primary"
        className="mb-2"
      >
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;
