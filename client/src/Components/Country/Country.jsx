import { Link } from "react-router-dom";
import style from "./Country.module.css";
export default function Country({
  id,
  name,
  imagen,
  continente,
  capital,
  población,
  mapa,
  activity,
}) {
  return (
    <div className={style.contenedor}>
      <Link className={style.link} to={`/Detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>
      <img className={style.img} src={imagen} alt="Bandera del país" />
      <h2 className={style.continente}> {continente} </h2>
      <h2 hidden>Capital: {capital}</h2>
      <h2 hidden>Población: {población}</h2>
      <Link to={mapa}>
        <h2 hidden>{mapa} </h2>
      </Link>
      <h2 hidden>Ubicación: {mapa}</h2>
      <h2 hidden>Actividad: {activity}</h2>
    </div>
  );
}
