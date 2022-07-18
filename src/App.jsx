import './App.scss';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        <Banner />
      </section>
      <section>
        <ItemListContainer title={'Descuentos'}/>
        <ItemListContainer title={'Mas comprados'}/>
      </section>
    </>
  );
}

export default App;
