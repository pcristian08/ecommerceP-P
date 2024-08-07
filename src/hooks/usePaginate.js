import { useState } from "react";

export const usePaginate = (data, itemsPerPages) => {
  const [currentPage, setCurrentPage] = useState(1);

  let totalPages = Math.ceil(data.length / itemsPerPages);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPages,
    currentPage * itemsPerPages
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return { currentData, nextPage, prevPage, totalPages, currentPage };
};
