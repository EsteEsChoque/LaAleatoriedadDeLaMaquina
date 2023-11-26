import React, { useState } from 'react';
import styles from './General.module.css';

// Función para generar un número aleatorio entre 1 y el número máximo
function generarNumeroAleatorio(maximo) {
  return Math.floor(Math.random() * maximo) + 1;
}

function SorteoNumeros() {
  const [input, setInput] = useState('');
  const [numeroGanador, setNumeroGanador] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Utiliza una expresión regular para permitir solo números
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    // Limita la longitud a 7 dígitos
    const truncatedValue = numericValue.slice(0, 7);

    // Llama a la función onChange con el valor validado y truncado
    setInput(truncatedValue);
  };

  const sorteo = () => {
    const cantidadNumeros = parseInt(input, 10);

    if (!isNaN(cantidadNumeros) && cantidadNumeros > 0) {
      // Genera un número aleatorio entre 1 y la cantidad ingresada
      const numeroAleatorio = generarNumeroAleatorio(cantidadNumeros);

      // Actualiza el estado con el número ganador
      setNumeroGanador(numeroAleatorio.toString());
    }
  };

  return (
    <div className={styles.contenedorCentrado}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <label style={{ marginBottom: '10px' }}>
        Cantidad de números
        <input
          type="text"
          value={input}
          onChange={(e) => handleInputChange(e)}
          />
      </label>
      <br />
      <button onClick={sorteo}>Sorteo</button>
      <div className={styles.container}>
        {numeroGanador && (
          <div>
            <h3>Número Ganador:</h3>
            <p>{numeroGanador}</p>
          </div>
        )}
      </div>
    </div>
        </div>
  );
}

export default SorteoNumeros;
