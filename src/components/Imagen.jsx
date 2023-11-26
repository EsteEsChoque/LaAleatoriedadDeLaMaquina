import React, { useState } from 'react';
import styles from './General.module.css';

function Imagen() {
  const [imageData, setImageData] = useState([]);
  const [generating, setGenerating] = useState(false);
  

  const generateImage = () => {
    setGenerating(true);

    // Crear datos de imagen aleatorios
    const newImageData = Array.from({ length: 300 * 300 }, () => {
      const color = getRandomColor();
      return [color.r, color.g, color.b, 255]; // RGBA format, 255 for fully opaque
    });

    setImageData(newImageData);

    setGenerating(false);
  };

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
  };

  return (
    <div >
      <div className={styles.contenedorCentrado}>
<div>

      <button onClick={generateImage} disabled={generating}>
        Generar Imagen
      </button>
</div>

<div>
      <p>300px x 300px</p>
      <br />
      <p>Buena suerte...</p>
      {generating && <p>Generando...</p>}
</div>
      </div>
      <div className={styles.imagen}>
        {imageData.length > 0 && (
          <img
            src={generateImageDataUrl(imageData)}
            alt="Generated Image"
            style={{ width: '300px', height: '300px', border: '1px solid black' }}
          />
        )}
      </div>
    </div>
  );
}

// Función para convertir los datos de imagen en una URL de datos
const generateImageDataUrl = (imageData) => {
  const canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');
  const imageDataArray = new Uint8ClampedArray(imageData.flat());

  if (imageDataArray.length === 0) {
    return ''; // Evitar construir un objeto ImageData vacío
  }

  const newImageData = new ImageData(imageDataArray, 300, 300);
  ctx.putImageData(newImageData, 0, 0);
  return canvas.toDataURL();
};

export default Imagen;
