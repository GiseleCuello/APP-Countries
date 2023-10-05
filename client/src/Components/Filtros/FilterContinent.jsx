import { useDispatch, useSelector } from "react-redux";
import { filterContinent } from "../../Redux/Actions";
import style from "./Filter.module.css";
import { useState } from "react";

export default function FilterContinent() {
  const dispatch = useDispatch();
  const continentFilter = useSelector(
    (state) => state.continentFilter.continente
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleContinentChange = (event) => {
    dispatch(filterContinent(event.target.value));
    setCurrentPage(1);
  };

  // Restablece el filtro
  const handleResetFilter = () => {
    dispatch(filterContinent(""));
  };

  return (
    <div className={style.contenedor}>
      <label className={style.label}>Filtrar por continente:</label>
      <select
        className={style.input}
        value={continentFilter || ""}
        onChange={handleContinentChange}
      >
        <option value="">Todos</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europa</option>
        <option value="Asia">Asia</option>
        <option value="South America">America del Sur</option>
        <option value="North America">America del Norte</option>
        <option value="Antarctica">Antartida</option>
      </select>
      <button className={style.boton} onClick={handleResetFilter}>
        Limpiar
      </button>
    </div>
  );
}
