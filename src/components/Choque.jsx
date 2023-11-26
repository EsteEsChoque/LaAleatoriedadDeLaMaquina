import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './General.module.css';

function Choque() {
    const abrirNuevaVentana = () => {
        window.open('https://esteeschoque.github.io/', '_blank');
      };
  return (
    <div className={styles.contenedorCentrado}>
      <div >
        <a href="https://github.com/EsteEsChoque" style={{  fontSize: "50px", }}><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sebastian-choque/" style={{  fontSize: "50px", }}><FaLinkedin /></a>
        <button onClick={abrirNuevaVentana}>Mi portfolio</button>
        <p>EsteEsChoque</p>
        <br />
        <p>Un desarrollador web Full Stack :D</p>
      </div>
    </div>
  );
}

export default Choque;
