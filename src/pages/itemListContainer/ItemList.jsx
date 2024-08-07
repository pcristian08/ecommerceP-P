import { Cartas } from "../../componentes/cartas/Cartas";
import "./itemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="cartas">
      {items.map((elemento) => {
        return (
          <Cartas
            key={elemento.id} //Siempre se debe utilizar el valor "key" cuando utilizo el .map
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
            id={elemento.id}
            img={elemento.img}
          />
        );
      })}
    </div>
  );
};
