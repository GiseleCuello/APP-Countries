import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";

export default function Landing() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1 className={style.titulo}>
        Explora, sueña, viaja... Descubre el mundo
      </h1>
      <div className={style.btn}>
        <button className={style.boton} onClick={goHome}>
          Empecemos
        </button>
      </div>
    </div>
  );
}
