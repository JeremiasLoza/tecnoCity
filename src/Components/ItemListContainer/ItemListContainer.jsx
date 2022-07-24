import ItemProduct from '../ItemProduct/ItemProduct';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';

function ItemListContainer({title}) {
  return (
    <div>
      <h2 className='mt-3 mb-3 text-center'>{title}</h2>

      <Container>
        <Row className='justify-content-around'>
          <ItemProduct photo="i7.jpg" title="Intel Core i7 10700KF" price={62850} stock={0}/>
          <ItemProduct photo="mother.jpg" title="ASUS PRIME X570-P" price={43650} stock={5}/>
          <ItemProduct photo="r5.jpg" title="Ryzen 5 5500 4.2GHz" price={33490} stock={4}/>
          <ItemProduct photo="placa.jpg" title="GALAX GeForce RTX 3090 Ti" price={349900} stock={2}/>
        </Row>
      </Container>
          
    </div> 
  );
}

export default ItemListContainer;