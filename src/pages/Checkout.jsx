import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartComponent from "../components/Cart/Cart";
import { Button } from "bootstrap";

const Checkout = () => {
  const { cartProducts, totalProducts, clear } = useContext(CartContext);

  return (
    <div>
      {cartProducts.length !== 0 ? (
        cartProducts.map((item, i) => {
          return <CartComponent key={i} product={item} />;
        })
      ) : (
        <h4>No tienes productos en el carrito!</h4>
      )}
      {cartProducts.length !== 0 && (
        <Button className="mt-2" onClick={() => clear()}>
          Vaciar carrito
        </Button>
      )}
    </div>
  );
};

export default Checkout;
