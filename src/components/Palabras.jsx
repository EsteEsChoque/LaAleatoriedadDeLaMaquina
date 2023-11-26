import React, { useState} from 'react';
import styles from './Palabra.module.css';
import stylesG from './General.module.css';

function Palabra() {
  const [input, setInput] = useState('');
  const [palabraGenerada, setPalabraGenerada] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [additionalMessage, setAdditionalMessage] = useState('');



  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Utiliza una expresión regular para permitir solo números
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    // Limita la longitud a 10 dígitos
    const truncatedValue = numericValue.slice(0, 7);

    // Llama a la función onChange con el valor validado y truncado
    setInput(truncatedValue);
  };

  const generarPalabra = () => {
    setLoading(true);
  
    const longitud = parseInt(input, 10);
  
    // Devolver una promesa que resuelve con la palabra generada después de un tiempo
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        if (!isNaN(longitud) && longitud > 0) {
          // Genera una palabra aleatoria con letras mayúsculas
          const palabra = Array.from({ length: longitud }, () =>
            String.fromCharCode(Math.floor(Math.random() * 26) + 65)
          ).join('');
  
          resolve(palabra);
        }
      }, 500); // Simula un retraso de 2 segundos, ajusta según sea necesario
    });
  
    promise
      .then((palabra) => {
        setPalabraGenerada(palabra);
      })
      .finally(() => {
        setLoading(false);
  
        // Agrega la lógica para mostrar mensajes adicionales
        if (longitud === 3 || longitud === 4 ||longitud === 5 || longitud === 6) {
          
          setAdditionalMessage('Con un poco de suerte, ¡quizás encuentres una palabra!');
        } else if (longitud > 7) {
          
          setAdditionalMessage('Con bastante suerte, ¡quizás se forme una palabra!');
        } else {
          
          setAdditionalMessage('');
        }
      });
  };
  

  return (
    <div >
      <div className={stylesG.contenedorCentrado}>

      <label>
        Cantidad de letras
        <input
          type="text"
          value={input}
          onChange={(e) => handleInputChange(e)}
          />
      </label>
      <br />
      <button onClick={generarPalabra}>Generar Palabra</button>
      {additionalMessage && <p> {additionalMessage}</p>}
      {loading && <p>Cargando...</p>}
          </div>
    
      <div className={styles.container}>
        {palabraGenerada && (
          <div>
            <h3>Palabra Generada:</h3>
            <p>{palabraGenerada}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Palabra;
