import React, { useState, useEffect } from 'react';
import style from "./Pokemon.module.css";
import stylesG from './General.module.css';

const URL = "https://pokeapi.co/api/v2/pokemon/";

const Pokemon = () => {
  const [pokemonAleatorio, setPokemonAleatorio] = useState(null);

  useEffect(() => {
    // Mostrar un Pokémon aleatorio al cargar el componente
    obtenerPokemonAleatorio();
  }, []);

  const procesarClasesDeEstilo = (pokemon) => {
    if (Array.isArray(pokemon.types)) {
      const tiposHTML = pokemon.types.map((tipo) => {
        const kebabCaseClass = tipo.type.name.toLowerCase();
        return `<p class="${style.tipo} ${style[kebabCaseClass]}">${tipo.type.name}</p>`;
      });
      return { ...pokemon, types: tiposHTML.join('') };
    }
    return pokemon;
  };
  

  const obtenerPokemonAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 151) + 1;
    fetch(`${URL}${numeroAleatorio}`)
      .then((response) => response.json())
      .then((data) => {
        const pokemonProcesado = procesarClasesDeEstilo(data);
        setPokemonAleatorio(pokemonProcesado);
      });
  };

  return (
    <div className={stylesG.contenedorCentrado}>

    <div className={style.nav}>
      <button onClick={obtenerPokemonAleatorio} className={style.button}>Obtener Pokémon Aleatorio</button>

      {pokemonAleatorio && (
        <div className={style.pokemon}>
          <p className={style.pokemonNombre}>{pokemonAleatorio.name}</p>
          <div className={style.pokemonImagen}>
            <img src={pokemonAleatorio.sprites.other["official-artwork"].front_default} alt={pokemonAleatorio.name} />
          </div>
          <div className={style.pokemonInfo}>
            <p className={style.pokemonId}>#{pokemonAleatorio.id}</p>
            <div className={style.pokemonTipos} dangerouslySetInnerHTML={{ __html: pokemonAleatorio.types }}></div>
            <div className={style.pokemonStats}>
              <p className={style.stat}>{pokemonAleatorio.height}m</p>
              <p className={style.stat}>{pokemonAleatorio.weight}kg</p>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
  );
};

export default Pokemon;
