import React, { useState, useEffect } from 'react';
import style from './Pokemon.module.css'; // Asegúrate de tener tu archivo CSS correspondiente
import stylesG from './General.module.css';

const URL = 'https://restcountries.com/v3/all';

const Paises = () => {
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener la lista de países
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching country data:', error));
  }, []);

  const obtenerPaisAleatorio = () => {
    if (countries.length > 0) {
      const numeroAleatorio = Math.floor(Math.random() * countries.length);
      setRandomCountry(countries[numeroAleatorio]);
    }
  };
  useEffect(() => {
    // Mostrar un país aleatorio al cargar el componente o al hacer clic en el botón
    obtenerPaisAleatorio();
  }, [countries, obtenerPaisAleatorio]);


  return (
    <div className={stylesG.contenedorCentrado}>

    <div className={style.nav}>
      <button onClick={obtenerPaisAleatorio} className={style.button}>
        Obtener País Aleatorio
      </button>

      {randomCountry && (
        <div className={style.pokemon}>
          <p className={style.pokemonNombre}>{randomCountry.name?.common || 'Nombre no disponible'}</p>
          <div className={style.pokemonImagen}>
            <img src={randomCountry.flags?.[0] || 'URL de imagen no disponible'} alt={randomCountry.name?.common || 'Nombre no disponible'} />
          </div>
          <div className={style.pokemonInfo}>
            <p className={style.pokemonId}>Capital: {randomCountry.capital?.[0] || 'No disponible'}</p>
            <p className={style.stat}>Región: {randomCountry.region || 'No disponible'}</p>
            <p className={style.stat}>Subregión: {randomCountry.subregion || 'No disponible'}</p>
            {/* Agrega más detalles según tus necesidades */}
          </div>
        </div>
      )}
    </div>
      </div>
  );
};

export default Paises;
