import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, deleteProducts, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Realmente deseas eliminarlo de tu carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, quitar",
      denyButtonText: `Continuar comprando`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProducts(id);
        Swal.fire("Eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se elimino", "", "info");
      }
    });
  };

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ border: "2px solid blue", width: "200px" }}
          >
            <img src="."></img>
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <h2>${elemento.price}</h2>
            <Button
              variant="contained"
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      <h2>Total a pagar: ${total}</h2>

      {cart.length > 0 && <Button onClick={clearCart}>Limpiar carrito</Button>}

      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
