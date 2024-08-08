import { Cartas } from "../../componentes/cartas/Cartas";
import "./itemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="item-list-container">
      {items.map((elemento) => {
        return (
          //Siempre se debe utilizar el valor "key" cuando utilizo el .map
          <div className="item-card" key={elemento.id}>
            <Cartas
              title={elemento.title}
              description={elemento.description}
              price={elemento.price}
              id={elemento.id}
              img={elemento.img}
            />
          </div>
        );
      })}
    </div>
  );
};
