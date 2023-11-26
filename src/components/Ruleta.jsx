import React, { useState } from 'react';
import ruletaImage from './img/ruleta.png';

const Ruleta = ({ onGirar }) => {
  const [girando, setGirando] = useState(false);
  const [numeroManual, setNumeroManual] = useState('');

  const girarRuleta = (numero) => {
    if (!girando) {
      let numeroSeleccionado;

      if (numero !== undefined) {
        // Si se proporciona un número, lo utilizamos
        numeroSeleccionado = numero;
      } else if (numeroManual !== '') {
        // Si no se proporciona un número, pero hay uno manualmente ingresado, lo utilizamos
        numeroSeleccionado = parseInt(numeroManual, 10);
      } else {
        // Si no se proporciona un número y no hay uno manualmente ingresado, generamos uno aleatorio
        numeroSeleccionado = Math.floor(Math.random() * 37); // Números del 0 al 36
      }

      setGirando(true);

      // Simulación de un giro, puedes ajustar la duración según tus necesidades
      setTimeout(() => {
        setGirando(false);
        onGirar(numeroSeleccionado);
      }, ); // Ajusta la duración del giro en milisegundos
    }
  };

  const handleGenerarAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 37); // Números del 0 al 36
    girarRuleta(numeroAleatorio);
  };

  const handleUsarManual = () => {
    const numeroIngresado = parseInt(numeroManual, 10);
    if (!isNaN(numeroIngresado) && numeroIngresado >= 0 && numeroIngresado <= 36) {
      girarRuleta(numeroIngresado);
    } else {
      // Manejar el caso donde el número ingresado manualmente no es válido
      alert('Ingresa un número válido entre 0 y 36.');
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    
    // Utiliza una expresión regular para permitir solo números y limitar a 0-36
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    const sanitizedValue = Math.min(Math.max(parseInt(numericValue, 10) || 0, 0), 36);
    
    setNumeroManual(sanitizedValue.toString());
  };
  
  return (
    <div>
      <img src={ruletaImage} alt="Ruleta" style={{ maxWidth: '100%' }} />
      <div>
        <label>
          Ingresar Número:
          <input 
          type="text" 
          value={numeroManual} 
          onChange={handleChange} 
          disabled={girando} />
        </label>
        <br />
        <button onClick={handleUsarManual} disabled={girando}>
          Usar Número Ingresado
        </button>
        <br />
      </div>
      <button onClick={() => girarRuleta()} disabled={girando}>
        Girar Ruleta
      </button>
    </div>
  );
};

export default Ruleta;
