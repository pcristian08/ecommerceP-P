import { CounterContainer } from "../../componentes/counter/CounterContainer";
import "./itemDetail.css";

const ItemDetail = ({ items, onAdd, initialQuantity }) => {
  return (
    <>
      <div className="containerItemDetail">
        <div className="containerImg">
          <img src={items.img} alt={items.title} />
        </div>
        <div className="containerDetail">
          <h2>
            <span>Nombre:</span> {items.title}
          </h2>
          <h2>
            <span>Descripción:</span> {items.description}
          </h2>
          <h2>
            <span>Precio:</span> ${items.price}.-
          </h2>
          {
            <CounterContainer
              onAdd={onAdd}
              stock={items.stock}
              initialQuantity={initialQuantity}
            />
          }
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
