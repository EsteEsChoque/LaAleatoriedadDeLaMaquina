import './App.css';
import React from 'react';
import { Routes,Route } from "react-router-dom";
import Nav from "./components/Nav";
import Sorteo from "./components/Sorteo";
import Imagen from "./components/Imagen";
import SorteoNumeros from "./components/SorteoNumeros";
import Palabras from "./components/Palabras";
import Pokemon from "./components/Pokemon";
import Paises from "./components/Paises";
import Respuestas from "./components/Respuestas";
import EstadisticasRuleta from "./components/EstadisticasRuleta";
import Choque from "./components/Choque";


function App() {
 
  return (
    <div>
       <Nav />
      <Routes>
      <Route path="/" element={<Sorteo />} />
      <Route path="sorteo" element={<Sorteo />} />
      <Route path="respuestas" element={<Respuestas />} />
      <Route path="estadisticasRuleta" element={<EstadisticasRuleta />} />
      <Route path="sorteoNumeros" element={<SorteoNumeros />} />
      <Route path="palabra" element={<Palabras />} />
      <Route path="imagen" element={<Imagen />} />
      <Route path="pokemon" element={<Pokemon />} />
      <Route path="paises" element={<Paises />} />
      <Route path="quienEsChoque" element={<Choque />} />
      </Routes>
     
    </div>
  );
}

export default App;
