import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ItemCount = ({ quantitySelected, stock }) => {
  const [count, setCount] = useState(1);

  const editItem = (num) => {
    setCount(count + num);
  };

  const onAdd = () => {
    quantitySelected(count);
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
        onClick={onAdd}
        // disabled={stock ? false : true}
        variant="outline-primary"
        className="mb-2"
      >
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;
