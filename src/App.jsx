import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";

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
        <ItemListContainer title={"Descuentos"} />
        <ItemListContainer title={"Mas comprados"} />
      </section>
    </>
  );
}

export default App;
