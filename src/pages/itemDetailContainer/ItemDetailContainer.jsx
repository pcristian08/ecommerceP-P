import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
/* import Swal from "sweetalert2";*/
import { dataBase } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";

// Método doc, referencia un documento en esecífico

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const [items, setItems] = useState({});

  let initialQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(dataBase, "products");
    let refDoc = doc(productsCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => setItems({ ...res.data(), id: res.id }));
  }, [id]);

  const onAdd = (quantity) => {
    // informacion del producto
    // cuantas unidades
    let finalObject = { ...items, quantity: quantity };
    addToCart(finalObject);
    /* Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado con éxito",
      showConfirmButton: true,
      timer: 1500,
    }); */
    toast.success("Producto agregado con éxito");
  };

  return (
    <ItemDetail items={items} onAdd={onAdd} initialQuantity={initialQuantity} />
  );
};

export default ItemDetailContainer;
