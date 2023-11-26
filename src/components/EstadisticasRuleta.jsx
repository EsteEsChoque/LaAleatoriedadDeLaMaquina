import React, { useState } from 'react';
import Ruleta from './Ruleta'; // Ajusta la ruta según la estructura de tu proyecto
import style from './EstadisticasRuleta.module.css'; // Agrega estilos según tus preferencias

const EstadisticasRuleta = () => {
  const [numerosGirados, setNumerosGirados] = useState([]);

  const actualizarEstadisticas = (numeroAleatorio) => {
    setNumerosGirados((prevNumeros) => [...prevNumeros, numeroAleatorio]);
  };

  const contarPares = () => {
    return numerosGirados.filter((numero) => numero % 2 === 0).length;
  };

  const contarImpares = () => {
    return numerosGirados.filter((numero) => numero % 2 !== 0).length;
  };

  const contarMenores = () => {
    return numerosGirados.filter((numero) => numero >= 1 && numero <= 18).length;
  };

  const contarMayores = () => {
    return numerosGirados.filter((numero) => numero >= 19 && numero <= 36).length;
  };

  const contarEnRango = (inicio, fin) => {
    return numerosGirados.filter((numero) => numero >= inicio && numero <= fin).length;
  };

  const contarEnFilas = (numero) => {
    const filas = [
      [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
      [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
      [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
    ];
  
    const numerosEnFila = filas[numero];
    //console.log('numerosGirados:', numerosGirados);
    //console.log('numerosEnFila:', numerosEnFila);
  
    const numerosEnFilaGirados = numerosGirados.filter((numero) => numerosEnFila.includes(numero));
    //console.log('numerosEnFilaGirados:', numerosEnFilaGirados);
  
    return numerosEnFilaGirados.length;
  };
  
  


  const contarNegros = () => {
    const negros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
    const contarNegros1 = numerosGirados.filter((numero) => negros.includes(numero));
    console.log(contarNegros1);
    const cantidadNegros = contarNegros1.length;
    console.log('Cantidad de números negros:', cantidadNegros);
    return cantidadNegros;
  };
  
  const contarNegros2 = () => {
    const negros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
    return numerosGirados.filter((numero) => negros.includes(numero));
  };
  
  const contarRojos = () => {
    const negros = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
    const contarNegros1 = numerosGirados.filter((numero) => negros.includes(numero));
    
    const rojos = [...Array(37).keys()].filter((numero) => !contarNegros1.includes(numero) && numero !== 0);
    const todosRojos = rojos.filter((numero) => numerosGirados.includes(numero));
console.log(todosRojos.length);
return todosRojos.length
};

  const cantidadNegros = contarNegros();
  return (
    <div style={{ marginLeft:"20px", marginRight:"20px"}}>
      <Ruleta onGirar={actualizarEstadisticas} />

      <div>
      <p>
        Números Ganadores:
        {numerosGirados.map((numero, index) => {
          let numeroClass = "numeroGanador";
          if (numero === 0) {
            numeroClass = "verde";
          } else if (contarNegros2().includes(numero)) {
            numeroClass = "negro";
          } else {
            numeroClass = "rojo";
          }

          return (
            <span key={index} className={style[numeroClass]}>
              {numero}
            </span>
          );
        })}
      </p>

        <p>Total Pares: {contarPares()}</p>
        <p>Total Impares: {contarImpares()}</p>
        <p>Total Menores (1-18): {contarMenores()}</p>
        <p>Total Mayores (19-36): {contarMayores()}</p>

        <p>Detalles por Rango:</p>
        <ul>
          <li>0: {contarEnRango(0, 0)}</li>
          <li>1-12: {contarEnRango(1, 12)}</li>
          <li>13-24: {contarEnRango(13, 24)}</li>
          <li>25-36: {contarEnRango(25, 36)}</li>
        </ul>

        <p>Detalles por Filas:</p>
        <ul>
          <li>Fila 1: {contarEnFilas(0)}</li>
          <li>Fila 2: {contarEnFilas(1)}</li>
          <li>Fila 3: {contarEnFilas(2)}</li>
        </ul>

        <p>Detalles por Color:</p>
        <ul>
          <li>Negro: {cantidadNegros}</li>
          <li>Rojo: {contarRojos()}</li>
        </ul>
      </div>
    </div>
  );
};

export default EstadisticasRuleta;
