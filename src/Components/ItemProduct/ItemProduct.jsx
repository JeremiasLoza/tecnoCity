import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';

function ItemProduct({photo, title, price}) {
  return (
    <Card style={{ width: '17rem' }} className="text-center m-3 shadow">
      <Card.Img variant="top" src={`/assets/Products/${photo}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>$ {price}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemProduct