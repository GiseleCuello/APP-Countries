import { useDispatch, useSelector } from "react-redux";
import { orderPopulation } from "../../Redux/Actions";
import style from "./Filter.module.css";

export default function OrderPopulation() {
  const dispatch = useDispatch();
  const populationOrder = useSelector((state) => state.populationOrder);

  const handlePopulationOrderChange = (event) => {
    dispatch(orderPopulation(event.target.value));
  };

  // Restablece el filtro
  const handleResetFilter = () => {
    dispatch(orderPopulation(""));
  };

  return (
    <div className={style.contenedor}>
      <label className={style.label}>Ordenar por población:</label>
      <select
        className={style.input}
        value={populationOrder || ""}
        onChange={handlePopulationOrderChange}
      >
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <button className={style.boton} onClick={handleResetFilter}>
        Limpiar
      </button>
    </div>
  );
}
