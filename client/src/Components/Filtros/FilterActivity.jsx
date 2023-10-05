import { useState } from "react";
import style from "./FilterActivity.module.css";

export default function FilterActivity({ setActivityFilter }) {
  const [searchAct, setSearchAct] = useState("");

  const handleActivityFilter = () => {
    setActivityFilter(searchAct);
    // Restablecer el filtro después de la búsqueda
    setSearchAct("");
  };

  return (
    <div className={style.contenedor}>
      <input
        className={style.input}
        type="text"
        placeholder="Tipo de actividad"
        value={searchAct}
        onChange={(e) => setSearchAct(e.target.value)}
      />
      <button className={style.boton} onClick={handleActivityFilter}>
        Buscar
      </button>
      <button className={style.boton} onClick={handleActivityFilter}>
        Limpiar
      </button>
    </div>
  );
}
