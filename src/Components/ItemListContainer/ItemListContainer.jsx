import ItemProduct from '../ItemProduct/ItemProduct';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';

function ItemListContainer({title}) {
  return (
    <div>
      <h2 className='mt-3 mb-3 text-center'>{title}</h2>

      <Container>
        <Row className='justify-content-around'>
          <ItemProduct photo="i7.jpg" title="Intel Core i7 10700KF" price={62850}/>
          <ItemProduct photo="r5.jpg" title="Ryzen 5 5500 4.2GHz Turbo" price={33490}/>
          <ItemProduct photo="i7.jpg" title="Intel Core i7 10700KF" price={62850}/>
          <ItemProduct photo="r5.jpg" title="Ryzen 5 5500 4.2GHz Turbo" price={33490}/>
        </Row>
      </Container>
          
    </div> 
  );
}

export default ItemListContainer;