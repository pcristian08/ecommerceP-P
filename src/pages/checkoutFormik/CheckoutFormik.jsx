import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CheckoutFormik = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderID, setOrderID] = useState("");

  let total = getTotalPrice();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telephone: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo requerido"),
      email: Yup.string()
        .email("El email debe contener un @")
        .required("Campo requerido"),
      telephone: Yup.string()
        .required("Campo requerido")
        .matches(/^\d{10}$/, "El número de teléfono debe contener 10 dígitos"),
    }),
    onSubmit: (values) => {
      const order = {
        buyer: {
          nombre: values.nombre,
          email: values.email,
          telephone: values.telephone,
        },
        items: cart,
        total: "$" + total,
      };

      const ordersCollection = collection(dataBase, "orders");
      const productsCollection = collection(dataBase, "products");

      cart.forEach((element) => {
        const refDoc = doc(productsCollection, element.id);
        updateDoc(refDoc, { stock: element.stock - element.quantity });
      });

      addDoc(ordersCollection, order)
        .then((res) => {
          setOrderID(res.id);
          toast.success(`Compra exitosa\n Su número de ticket es: ${res.id}`);
        })
        .catch(() => {
          toast.error("Algo no salió bien");
        })
        .finally(() => {
          clearCart();
          navigate("/");
        });
    },
    validateOnChange: false,
  });

  return (
    <div>
      <h1>Aca va el formulario</h1>
      {orderID ? (
        <p>El número de ticket es: {orderID}</p>
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          style={{
            margin: "50px",
            display: "flex",
            flexDirection: "column",
            width: "40%",
            gap: "20px",
          }}
        >
          <TextField
            variant="outlined"
            type="text"
            label="Nombre"
            name="nombre"
            onChange={formik.handleChange}
            error={formik.errors.nombre ? true : false}
            helperText={formik.errors.nombre}
          />
          <TextField
            variant="outlined"
            type="text"
            label="Email"
            name="email"
            onChange={formik.handleChange}
            error={formik.errors.email ? true : false}
            helperText={formik.errors.email}
          />
          <TextField
            variant="outlined"
            type="text"
            label="Teléfono"
            name="telephone"
            onChange={formik.handleChange}
            error={formik.errors.telephone ? true : false}
            helperText={formik.errors.telephone}
          />
          <Button type="submit" variant="contained">
            Ejecutar compra
          </Button>
        </form>
      )}
    </div>
  );
};

export default CheckoutFormik;
