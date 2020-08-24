import React from 'react';
import Pelicula from './Pelicula';


function TiraPeliculas() {
  return (
    <div>
        <Pelicula rating="8.0" titulo="Harry Potter" />
        <Pelicula rating="7.5" titulo="Toy Story" />
        <Pelicula rating="6.0" titulo="Her" />
        <Pelicula rating="9.0" titulo="Parasite" />
        <Pelicula rating="4.0" titulo="Transformers" />
    </div>
  );
}

export default TiraPeliculas;
