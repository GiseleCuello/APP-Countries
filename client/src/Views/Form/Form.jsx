import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, postActivity } from "../../Redux/Actions";
import { Link } from "react-router-dom";
import validate from "./Validate";
import style from "./Form.module.css";

export default function ActivityForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    dificultad: "",
    duracionHoras: "",
    temporada: "",
    descripcion: "",
    pais: [],
  });
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Estado para mostrar el mensaje de éxito
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar cambios en la selección de países
  const handleCountrySelection = (e) => {
    const selectedCountryName = e.target.value;
    if (!formData.pais.includes(selectedCountryName)) {
      setFormData({
        ...formData,
        pais: [...formData.pais, selectedCountryName],
      });
    }
  };

  // Función para manejar la eliminación de un país seleccionado
  const handleCountryRemoval = (selectedCountryName) => {
    const updatedPais = formData.pais.filter(
      (name) => name !== selectedCountryName
    );
    setFormData({
      ...formData,
      pais: updatedPais,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    // Verificar si hay errores de validación
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (formData.pais.length === 0) {
      setErrors({
        ...validationErrors,
        pais: "Debe seleccionar al menos un país.",
      });
      return;
    }
    try {
      dispatch(postActivity(formData));

      setShowSuccessMessage(true); // Mostrar el mensaje de éxito

      // Restablece el formulario
      setFormData({
        nombre: "",
        dificultad: "",
        duracionHoras: "",
        temporada: "",
        descripcion: "",
        pais: [],
      });
      setErrors({});
    } catch (error) {
      console.error("Error al crear la actividad: ", error);
    }
  };

  const handleCerrar = () => {
    setShowSuccessMessage(false);
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors(validate({ ...formData, [name]: value }));
  };

  return (
    <div className={style.contenedor}>
      <form onSubmit={handleSubmit} className={style.formulario}>
        <div className={style.act}>
          <label>Actividad:</label>
          <input
            className={style.actinput}
            type="text"
            name="nombre"
            placeholder="Nombre de la actividad"
            value={formData.nombre}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.nombre && (
            <span className={style.error}> {errors.nombre} </span>
          )}
        </div>

        <div className={style.dif}>
          <label>Dificultad:</label>
          <input
            className={style.difinput}
            type="text"
            name="dificultad"
            placeholder="Del 1 al 5"
            value={formData.dificultad}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.dificultad && (
            <span className={style.error}> {errors.dificultad} </span>
          )}
        </div>
        <div className={style.dur}>
          <label>Duración:</label>
          <input
            className={style.durinput}
            type="text"
            name="duracionHoras"
            placeholder="Horas"
            value={formData.duracionHoras}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.duracionHoras && (
            <span className={style.error}> {errors.duracionHoras} </span>
          )}
        </div>
        <div className={style.temp}>
          <label>Temporada:</label>
          <select
            className={style.tempsel}
            type="text"
            name="temporada"
            value={formData.temporada}
            onChange={handleInputChange}
            onBlur={handleBlur}
          >
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
          {errors.temporada && (
            <span className={style.error}> {errors.temporada} </span>
          )}
        </div>
        <div>
          <label className={style.pais}>Países</label>
          <select
            className={style.paissel}
            name="pais"
            value={formData.pais}
            onChange={handleCountrySelection}
            multiple // Habilita la selección múltiple
            onBlur={handleBlur}
          >
            {allCountries.length > 0 &&
              allCountries
                .slice() // Copia el array para no modificar el original
                .sort((a, b) => a.name.localeCompare(b.name)) // Ordena alfabéticamente
                .map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
          </select>
          {errors.pais && <span className={style.error}> {errors.pais} </span>}
        </div>
        <div>
          <label className={style.selec}>Países seleccionados:</label>
          <ul className={style.lista}>
            {formData.pais.map((selectedCountryName) => {
              const selectedCountry = allCountries.find(
                (country) => country.name === selectedCountryName
              );
              return (
                <li key={selectedCountry.name}>
                  {selectedCountry.name}
                  <button
                    className={style.close}
                    onClick={() => handleCountryRemoval(selectedCountryName)}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <label className={style.descrip}>Descripción:</label>
          <textarea
            className={style.descinput}
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.descripcion && (
            <span className={style.errordesc}> {errors.descripcion} </span>
          )}
        </div>
        <button className={style.boton} type="submit">
          Crear Actividad
        </button>
        {showSuccessMessage && (
          <div className={style.successMessage}>
            Actividad creada exitosamente
            <button className={style.btnalert} onClick={handleCerrar}>
              Cerrar
            </button>
          </div>
        )}
      </form>
      <div>
        <Link className={style.linkact} to="/activities">
          <h3>Volver a actividades</h3>
        </Link>
        <Link className={style.linkhome} to="/home">
          <h3>Volver a home</h3>
        </Link>
      </div>
      <div>
        <label className={style.titulo}>Bitácora de viaje</label>
      </div>
    </div>
  );
}
