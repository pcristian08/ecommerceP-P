import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
useNavigate;

const Checkout = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ nombre: "", email: "", telephone: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderID, setOrderID] = useState("");

  let total = getTotalPrice();

  const sendForm = (event) => {
    event.preventDefault(); //El preventDefault evita el actualizado por defecto de la pagina
    let order = {
      buyer: user,
      items: cart,
      total: "$" + total,
    };

    let ordersCollection = collection(dataBase, "orders");
    let productsCollection = collection(dataBase, "products");
    cart.forEach((element) => {
      let refDoc = doc(productsCollection, element.id);
      updateDoc(refDoc, { stock: element.stock - element.quantity }); //Funciona con el método patch
    });

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderID(res.id);
        toast.success(`Compra exitosa\n Su número de ticket es: ${res.id}`);
      })
      .catch("Algo no salió bien")
      .finally(() => {
        clearCart();
        navigate("/");
      });
  };

  const handleChange = (event) => {
    //Siempre las funciones que son llamadas por un onChange, se llaman handleChange
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
    //Es lo mismo que: setUser( { ...user, [event.target.name]: event.target.value }), pero es mejor desestructurarlos con {} en una variable
  };

  /* function showMessage() {
    Toastify({
      text: "Gracias por tu compra!.\n El número de comprobante es: " + orderID,
      className: "info",
      style: {
        background: "linear-gradient(to right, #4682B4, #1F242E)",
        color: "white",
        padding: "10px",
        width: "40%",
        borderRadius: "10px",
      },
      position: "right",
    }).showToast();
  } */

  return (
    <div>
      <h1>Aca va el formulario</h1>

      {orderID ? (
        addDoc()
      ) : (
        <form onSubmit={sendForm}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={handleChange}
            name="nombre"
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={handleChange}
            name="email"
          />
          <input
            type="number"
            placeholder="Ingresa tu telefono"
            onChange={handleChange}
            name="telephone"
          />

          <Button type="onSubmit">Enviar</Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
