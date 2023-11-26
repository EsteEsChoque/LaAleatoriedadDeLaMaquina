import React from 'react';
import style from "./Nav.module.css";
import { Link} from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Nav() {
  return (
    <div className={style.nav} >
      <div className={style.nav2}>

      <div className="redes">
          <a href="https://github.com/EsteEsChoque"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sebastian-choque/"><FaLinkedin /></a>
          <p>EsteEsChoque</p>
        </div>
        <p><Link to = "/sorteo" className={style.boton}> sorteo</Link></p>
        <p><Link to = "/respuestas" className={style.boton}> respuestas</Link></p>
        <p><Link to = "/estadisticasRuleta" className={style.boton}> EstadisticasRuleta</Link></p>
        <p><Link to = "/sorteoNumeros" className={style.boton}> Sorteo N°</Link></p>
        <p><Link to = "/palabra" className={style.boton}> Palabra</Link></p>
        <p><Link to = "/imagen" className={style.boton}> Imagen</Link></p>
        <p><Link to = "/pokemon" className={style.boton}> Pokemon</Link></p>
        <p><Link to = "/paises" className={style.boton}> Paises</Link></p>
        <p><Link to = "/quienEsChoque" className={style.boton}> By: Choque</Link></p>

      </div>
     
    </div>
  );
};
export default Nav;
