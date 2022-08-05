import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <section>
      <Banner />
      <ItemListContainer title={"Descuentos"} />
    </section>
  );
};

export default Home;
