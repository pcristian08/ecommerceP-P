import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ onAdd, stock, initialQuantity = 1 }) => {
  //Un estado es como una variable pero que recuerda su valor anterior
  const [contador, setContador] = useState(initialQuantity);

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Minimo");
    }
  };

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Stock máximo:");
    }
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};
