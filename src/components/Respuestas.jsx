import React, { useState } from 'react';
import caraImage from './img/cara.png'; // Ruta a la imagen de cara
import secaImage from './img/seca.png'; // Ruta a la imagen de seca
import styles from './General.module.css';

const Respuestas = () => {
  const [inputValue, setInputValue] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [respuesta1, setRespuesta1] = useState('');
  const [respuesta2, setRespuesta2] = useState('');
  const [imagen, setImagen] = useState(null);

  const generarRespuestaAleatoria = () => {
    const respuestasPosibles = ['Sí', 'No'];
    const respuestaAleatoria = respuestasPosibles[Math.floor(Math.random() * respuestasPosibles.length)];
    setRespuesta(respuestaAleatoria);
  };

  const generarRespuestaNivel = () => {
    const respuestasNivel = ['Nada', 'Poco', 'Algo', 'Bastante', 'Mucho'];
    const respuestaNivelAleatoria = respuestasNivel[Math.floor(Math.random() * respuestasNivel.length)];
    setRespuesta1(respuestaNivelAleatoria);
  };

  const mostrarCaraOSeca = () => {
    const opciones = ['Cara', 'Seca'];
    const opcionAleatoria = opciones[Math.floor(Math.random() * opciones.length)];
    setRespuesta2(opcionAleatoria);
    setImagen(opcionAleatoria === 'Cara' ? caraImage : secaImage);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.contenedorCentrado}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <label style={{ marginBottom: '10px' }}>
        Ingresa algo:
        <input type="text" value={inputValue} onChange={handleChange} />
        
      </label>
      <br />
      <button onClick={generarRespuestaAleatoria}>Generar Respuesta Sí/No</button>
      {respuesta && <p>Respuesta: {respuesta}</p>}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: "50px",marginRight: "50px"}}>

      <button onClick={generarRespuestaNivel}>Generar Respuesta Nivel</button>
      <br />
      {respuesta1 && <p>Respuesta: {respuesta1}</p>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: "50px",marginRight: "50px"}}>

      <button onClick={mostrarCaraOSeca}>Cara o Seca</button>
      <br />
      {imagen && (
        <div>
          <img 
          src={imagen} 
          alt={respuesta}
          style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
           />
          <p>{respuesta2}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Respuestas;
