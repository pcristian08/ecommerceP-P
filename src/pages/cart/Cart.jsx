import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./cart.css"; // Importar el archivo CSS

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
    <div className="cart-container">
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="cart-card">
            <img
              src={elemento.img}
              alt={elemento.title}
              className="cart-image"
            />
            <div className="cart-info">
              <h3>Nombre del producto: {elemento.title}</h3>
              <h4>Cantidad: {elemento.quantity}</h4>
              <h4>Precio unitario: ${elemento.price}</h4>
              <h4>Total: ${elemento.price * elemento.quantity}</h4>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleDelete(elemento.id)}
              >
                Eliminar
              </Button>
            </div>
          </div>
        );
      })}

      <div className="cart-total">Total a pagar: ${total}</div>

      <div className="cart-footer">
        {cart.length > 0 && (
          <Button variant="contained" color="warning" onClick={clearCart}>
            Limpiar carrito
          </Button>
        )}

        <Link to="/checkout">
          <Button
            variant="contained"
            color="success"
            style={{ marginLeft: "10px" }}
          >
            Finalizar compra
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
