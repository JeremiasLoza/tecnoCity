import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

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

        <ItemDetailContainer />
      </section>
    </>
  );
}

export default App;
