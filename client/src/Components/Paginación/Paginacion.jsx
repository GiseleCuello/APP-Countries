import React from "react";
import style from "./Paginacion.module.css";

export default function Pagination({
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
}) {
  return (
    <div className={style.contenedor}>
      <button
        className={style.btn}
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <p className={style.pagina}>
        Página {currentPage} de {totalPages}
      </p>
      <button
        className={style.btn}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
}
