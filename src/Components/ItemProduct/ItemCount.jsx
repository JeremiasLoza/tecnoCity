import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);

    const sumItem = () => {
        if(count < stock) setCount(count + 1);
    };

    const lessItem = () => {
        if(count > 1) setCount(count - 1);
    };

  return (
    <ButtonToolbar className="mb-3">
        <ButtonGroup>
            <Button onClick={lessItem} disabled={count === 1} variant={`${!stock?'secondary':'primary'}`}>-</Button>
                <InputGroup>
                    <Form.Control className="text-center" placeholder={stock ? count : stock} disabled />
                </InputGroup>
            <Button onClick={sumItem} disabled={stock === count || stock === 0} variant={`${!stock?'secondary':'primary'}`}>+</Button>
        </ButtonGroup>
    </ButtonToolbar>
  )
}

export default ItemCount