import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let getData = fetch(endpoint);
    getData.then((res) => res.json()).then((res) => setData(res));
  }, [endpoint]);

  return data;
};

// no retorna jsx, por eso no es un componente
// no es una funcion comun de js, porque permite usar cosas de React
