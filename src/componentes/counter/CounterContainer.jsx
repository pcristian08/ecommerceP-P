import { useState } from "react";
import { Counter } from "./Counter";
import Swal from "sweetalert2";

export const CounterContainer = ({ onAdd, stock, initialQuantity = 1 }) => {
  const [contador, setContador] = useState(initialQuantity);

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Mínimo alcanzado",
        text: "No puedes reducir más la cantidad.",
      });
    }
  };

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Stock máximo alcanzado",
        text: `Solo puedes agregar hasta ${stock} unidades.`,
      });
    }
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};
