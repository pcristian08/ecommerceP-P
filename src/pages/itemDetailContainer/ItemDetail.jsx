import { CounterContainer } from "../../componentes/counter/CounterContainer";
import "./itemDetail.css";

const ItemDetail = ({ items, onAdd, initialQuantity }) => {
  return (
    <>
      <div>
        <div className="containerItemDetail">
          <div className="containerImg">
            <img src={items.img} alt="img1" />
          </div>
        </div>

        <div className="containerDetail">
          <h2>
            {" "}
            {/* fontFamily: "monospace" */}
            <span> {/* fontSize: "23px" */}Nombre:</span> {items.title}
          </h2>
          <h2>
            {" "}
            {/* fontFamily: "monospace" */}
            <span> {/* fontSize: "23px" */}Descripción:</span>{" "}
            {items.description}
          </h2>
          <h2>
            {" "}
            {/* fontFamily: "monospace" */}
            <span> {/* fontSize: "23px" */}Precio:</span> ${items.price}.-
          </h2>
        </div>
        <CounterContainer
          onAdd={onAdd}
          stock={items.stock}
          initialQuantity={initialQuantity}
        />
      </div>
    </>
  );
};

export default ItemDetail;
