import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    let existe = isInCart(products.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === products.id) {
          return {
            ...elemento,
            quantity: products.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, products]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((products) => products.id === id);
    return existe;
  };

  const deleteProducts = (id) => {
    let newArr = cart.filter((elemento) => elemento.id !== id);
    setCart(newArr);
  };

  const getQuantityById = (id) => {
    return cart.find((products) => products.id === id)?.quantity ?? 1;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acumulator, element) => {
      //Clase 12
      return acumulator + element.price * element.quantity;
    }, 0);
    return total;
  };

  const getTotalItems = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProducts,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
