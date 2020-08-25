import React from 'react';
import PropTypes from 'prop-types';
import "./Peliculas.css";

//Aca estamos extendiendo nuestra caja de herramientas
//usando JSX  como lenguaje de renderizacion de 
//componentes dentro de REACT

function Pelicula(props) {
//estas variables van a ir modificandose segun la pelic.
  //let rating=5.8;
  
  //Aca comenzamos a trabajar con props(propiedades)
 
//  let generos=["Accion","Drama"];
//ahora vamos a hacer que por props reciba tambien los
//generos

//ademas lo interesante es que podemos intervenir 
//nuestro JSX, con variables, impresiones, repeticiones,
//y condicionales(donde herramientas como el if ternario 
//se vuelve sumamente comodas para utilizar con REACT)
let listadoDeGeneros;

if(props.generos !=null){
	listadoDeGeneros=
	<ul>
    { props.generos.map((genero, i)=><li key={genero + i} >{genero}</li>)}
  </ul>
}  else{
  listadoDeGeneros="";
}

return (
    <div>
        <h2 className="sarasa">{props.titulo}</h2>
        <p>Rating: {props.rating}</p>
        {listadoDeGeneros}
        
    </div>
  );
}
//aca la palabra rating, fue reemplazada por una variable
//que esta entre llaves
//En REACT, en vez de usar un for, se usa map
//para hacer repeticiones

//****Aca conocemos a DEFAULTPROPS
Pelicula.defaultProps={
    rating:"Esta peli aun no fue puntuada!!",
    generos: null
}

// eslint-disable-next-line react/no-typos
Pelicula.propTypes={
    rating: PropTypes.number,
    titulo: PropTypes.string
}

export default Pelicula;
