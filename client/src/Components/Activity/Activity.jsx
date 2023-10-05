import { useEffect, useState } from "react";
import { getActivity } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FilterActivity from "../Filtros/FilterActivity";
import style from "./Activity.module.css";

export default function Activity() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  console.log("estado", activities);
  const [activityFilter, setActivityFilter] = useState(""); // Estado local para almacenar el filtro
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    setError(null); // Restablece el estado de error cuando se cambia el filtro
    setNoResults(false); // Restablece el estado noResults cuando se cambia el filtro
    dispatch(getActivity(activityFilter))
      .then((response) => {
        if (!response || response.length === 0) {
          setNoResults(true);
        }
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("Ocurrió un error al buscar actividades.");
        }
      });
  }, [activityFilter, dispatch]);

  return (
    <div className={style.contenedor}>
      <div className={style.linkform}>
        <Link className={style.link} to="/postactivity">
          <h3>Crea tu propia actvidad</h3>
        </Link>
      </div>
      <FilterActivity setActivityFilter={setActivityFilter} />
      {noResults ? (
        <div>
          <p className={style.alert}>
            No se encontraron actividades que coincidan con la búsqueda.
          </p>
          <button
            className={style.btnalert}
            onClick={() => setNoResults(false)}
          >
            Cerrar
          </button>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        activities.map((activity, index) => (
          <div key={index} className={style.actividad}>
            <p className={style.tipo}>Tipo de actividad: {activity.nombre}</p>
            <p className={style.tipo}>Dificultad: {activity.dificultad}</p>
            <p className={style.tipo}>
              Duración (Horas): {activity.duracionHoras}
            </p>
            <p className={style.tipo}>Temporada: {activity.temporada}</p>
            <p className={style.tipo}>Descripción: {activity.descripcion}</p>
            <p className={style.tipo}>País: {activity.pais.join(", ")}</p>
          </div>
        ))
      )}
      <div className={style.linkhome}>
        <Link className={style.link} to="/home">
          <h3>Volver a home</h3>
        </Link>
      </div>
    </div>
  );
}
