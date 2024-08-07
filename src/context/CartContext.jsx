import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    try {
      const parsedCart = JSON.parse(savedCart);
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  const addToCart = (products) => {
    let existe = isInCart(products.id);
    let newArray;
    if (existe) {
      newArray = cart.map((elemento) => {
        if (elemento.id === products.id) {
          return {
            ...elemento,
            quantity: products.quantity,
          };
        } else {
          return elemento;
        }
      });
    } else {
      newArray = [...cart, products];
    }
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const isInCart = (id) => {
    return Array.isArray(cart) && cart.some((products) => products.id === id);
  };

  const deleteProducts = (id) => {
    const newArr = Array.isArray(cart)
      ? cart.filter((elemento) => elemento.id !== id)
      : [];
    setCart(newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
  };

  const getQuantityById = (id) => {
    if (!Array.isArray(cart)) {
      console.error("cart is not an array:", cart);
      return 1;
    }
    return cart.find((products) => products.id === id)?.quantity ?? 1;
  };

  const getTotalPrice = () => {
    if (!Array.isArray(cart)) {
      console.error("cart is not an array:", cart);
      return 0;
    }
    return cart.reduce((acumulator, element) => {
      return acumulator + element.price * element.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    if (!Array.isArray(cart)) {
      console.error("cart is not an array:", cart);
      return 0;
    }
    return cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
  };

  const data = {
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
