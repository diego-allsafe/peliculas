import React from 'react';
import Pelicula from './Pelicula';


function TiraPeliculas() {
  return (
    <div>
        <Pelicula generos={["Fantasia","Aventuras"]} rating="8.0" titulo="Harry Potter" />
        <Pelicula generos={["Animacion","Familiar"]} rating="7.5" titulo="Toy Story" />
        <Pelicula generos={["Drama"]} rating="6.0" titulo="Her" />
        <Pelicula generos={["Drama"]} rating="9.0" titulo="Parasite" />
        <Pelicula generos={["Accion","Aventuras"]} rating="4.0" titulo="Transformers" />
    </div>
  );
}

export default TiraPeliculas;
