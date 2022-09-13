import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);

  const addProductToCart = (product) => {
    if (!isInCart(product)) {
      setCartProducts((cartProducts) => [...cartProducts, product]);
    }
  };

  const getProductQuantity = (product) => {
    if (isInCart(product)) {
      const prodQuantity = cartProducts.find(
        (prod) => prod.title == product.title
      );

      return prodQuantity.quantity;
    }
  };

  const modifyQuantity = (quantity) => {
    setTotalProducts(totalProducts + quantity);
  };

  const removeProductFromCart = (product) => {
    for (var i = 0; i < cartProducts.length; i++) {
      if (cartProducts[i] == product) {
        cartProducts.splice(i, 1);
      }
    }

    setCartProducts(cartProducts);
    setTotalProducts(cartProducts.length);
  };

  const isInCart = (product) => {
    return cartProducts.includes(product);
  };

  const clear = () => {
    setCartProducts([]);
    setTotalProducts(0);
  };

  const data = {
    cartProducts,
    addProductToCart,
    clear,
    removeProductFromCart,
    isInCart,
    modifyQuantity,
    totalProducts,
    getProductQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;

export { CartContext };
