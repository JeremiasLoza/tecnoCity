import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import ItemCount from './ItemCount';

function ItemProduct({photo, title, price, stock}) {
  return (
    <Card style={{ width: '17rem' }} className="text-center m-3 shadow">
      <Card.Img className='mt-2' variant="top" src={`/assets/Products/${photo}`} />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>

      <Card.Text style={{ fontSize: "1.5rem" }} className='mb-2 text-primary'>$ {price}</Card.Text>

      <ItemCount stock={stock} />

      <Button disabled={stock?false:true} variant="outline-primary" className='mb-2'>Agregar al carrito</Button>
      
      <Card.Text style={{ fontSize: "0.7rem" }} className={`${!stock?'text-danger':'text-dark'}`}>Stock: {stock}</Card.Text>
    </Card>
  )
}

export default ItemProduct