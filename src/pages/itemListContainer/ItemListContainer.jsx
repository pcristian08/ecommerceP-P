import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { dataBase } from "../../firebaseConfig";
import {
  /* addDoc, */ collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

// Método query permite hacer filtrado en la db para obtener docs
// Método where recibe 3 parametros. 1- Filtramos en base a? | 2- Condición de firebase | 3- Filtrar el tipo de la categoria

export const ItemListContainer = () => {
  //Una petición que me arroje los productos del backend

  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Hacer la petición
    // Traer los productos
    // Guardar en el estado
    let productsCollection = collection(dataBase, "products");

    let consulta = productsCollection;

    name &&
      (consulta = query(productsCollection, where("category", "==", name)));

    let getProducts = getDocs(consulta);
    getProducts.then((rta) => {
      let arrayDocument = rta.docs.map((products) => {
        return { ...products.data(), id: products.id };
      });
      setItems(arrayDocument);
    });
  }, [name]);

  /*  if(items.length === 0) {
    return <h1>Cargando.....</h1>
  } */

  if (items.length === 0) {
    return (
      <div
        style={{
          margin: "70px",
          justifyContent: "center",
          width: "100%",
          display: "flex",
        }}
      >
        <RingLoader color="steelblue" size={100} />
      </div>
    );
  }

  /* const addProducts = () => {
    let productsCollection = collection(dataBase, "products");
    products.forEach((element) => {
      addDoc(productsCollection, element);
    });
  }; */

  return (
    <div>
      {/* <Button variant="contained" onClick={addProducts}>
        Agregar Productos
      </Button> */}
      <ItemList items={items} />
    </div>
  );
};
