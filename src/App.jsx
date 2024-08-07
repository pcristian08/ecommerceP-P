import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import Cart from "./pages/cart/Cart";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./componentes/layout/Layout";
import CartContextProvider from "./context/CartContext";
import CheckoutFormik from "./pages/checkoutFormik/CheckoutFormik";
import { Toaster } from "sonner";
/* import Checkout from "./pages/checkout/Checkout"; */

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" duration={5000} />
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<CheckoutFormik />} />
          </Route>

          <Route>
            <Route path="*" element={<h1>404 Not Found</h1>} />{" "}
            {/* Armar componente */}
            {/* <Route path="/login" element={<Login />} /> */}
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
