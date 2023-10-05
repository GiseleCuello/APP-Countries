import { Link } from "react-router-dom";
import style from "./About.module.css";

const AboutText = () => {
  return (
    <div className={style.contenedor}>
      <div>
        <h1 className={style.titulo}>El proyecto</h1>
      </div>
      <div className={style.texto}>
        <p>
          La aplicación se centra en la exploración del mundo y de diferentes
          países a través de los ojos. Permite a los usuarios buscar países,
          aplicar filtros y ver los resultados en forma de "pasaportes". Pero
          eso no es todo, ¡también ofrecemos información detallada sobre cada
          país!
        </p>
      </div>
      <div>
        <h2 className={style.titulo}>Características Destacadas</h2>
      </div>
      <div className={style.texto}>
        <ul>
          <li>
            Búsqueda Personalizada: La aplicación cuenta con una barra de
            búsqueda que permite a los usuarios buscar países por nombre.
          </li>
          <li>
            Explora Actividades: No solo proporciona información sobre países,
            sino que también destaca actividades emocionantes que los usuarios
            pueden realizar en cada lugar.
          </li>
          <li>
            Filtros Inteligentes: Los usuarios pueden aplicar filtros para
            refinar sus búsquedas y encontrar el destino perfecto para su
            próximo viaje.
          </li>
          <li>
            Formulario de Creación: Para aquellos que quieran compartir sus
            propias experiencias, he incorporado un formulario de creación de
            actividades.
          </li>
        </ul>
      </div>
      <div>
        <h1 className={style.titulo}>¿Qué Puedes Esperar?</h1>
      </div>
      <div className={style.texto}>
        <p>
          El objetivo es brindarte una experiencia de usuario única y divertida
          mientras exploras el mundo a través de este proyecto. Ya sea que estés
          planeando tu próximo viaje o simplemente deseas conocer más sobre
          diferentes países y actividades, ¡la aplicación está aquí para ti!
          Gracias por visitar mi proyecto y formar parte de esta emocionante
          aventura. ¡Esperamos que lo disfrutes tanto como yo disfruté
          creándolo!
        </p>
      </div>
      <div>
        <h1 className={style.titulo}>Acerca de Mí</h1>
      </div>
      <div className={style.texto}>
        <p>
          ¡Hola! Soy Gisele, estudiante del bootcamp de Henry, y me complace
          presentarte mi proyecto de desarrollo Full Stack. A lo largo de este
          emocionante viaje, he tenido la oportunidad de explorar y aprender
          diversas tecnologías, desde React y Redux hasta Node.js, Express, CSS
          y bases de datos relacionales - SQL. Con todas ellas, pude construir
          este hermoso proyecto.
        </p>
      </div>
      <div>
        <Link className={style.link} to="/home">
          Volver a home
        </Link>
      </div>
    </div>
  );
};

export default AboutText;
