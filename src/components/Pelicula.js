import React from 'react';

//Aca estamos extendiendo nuestra caja de herramientas
//usando JSX  como lenguaje de renderizacion de 
//componentes dentro de REACT

function Pelicula() {
//estas variables van a ir modificandose segun la pelic.
  let rating=5.8;
  let generos=["Accion","Drama"];
//ademas lo interesante es que podemos intervenir 
//nuestro JSX, con variables, impresiones, repeticiones,
//y condicionales(donde herramientas como el if ternario 
//se vuelve sumamente comodas para utilizar con REACT)
  return (
    <div>
        <h2 className="sarasa">Titulo de la Pelicula!!</h2>
        <p>Rating: {rating}</p>
        <ul>
            { generos.map(genero=><li>{genero}</li>)}
        </ul>
    </div>
  );
}
//aca la palabra rating, fue reemplazada por una variable
//que esta entre llaves
//En REACT, en vez de usar un for, se usa map
//para hacer repeticiones

export default Pelicula;
