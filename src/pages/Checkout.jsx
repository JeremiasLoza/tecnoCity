import Cart from "../components/Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartProducts, totalPrice } = useContext(CartContext);
  return (
    <div className="mt-2">
      {cartProducts.length !== 0 ? (
        cartProducts.map((item, i) => {
          return <Cart key={i} product={item} />;
        })
      ) : (
        <h4>No tienes productos en el carrito!</h4>
      )}
    </div>
  );
};

export default Checkout;
