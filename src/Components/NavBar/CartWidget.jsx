import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import './CartWidget.scss';

const CartWidget = () => {
  return (
    <Button className='shadow-none no-border ms-1' variant="outline-primary">
      <Cart />
      <Badge bg='none'>0</Badge>
    </Button>

  )
}

export default CartWidget