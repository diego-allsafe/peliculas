import React, {Component} from 'react';
import Pelicula from './Pelicula';

//Para trabajar con Statefull components, primero 
//debemos agregar al lado de react, la palabra
//{Component}
//Son llamados Componentes con estado. Ya no son 
//funciones nativas de Js sino un nuevo tipo de dato
//: una clase.

//luego reemplazamos la palabra function por class
//y luego aplicamos el metodo render al return
class TiraPeliculas extends Component {
   render(){ 
    return (
        <div>
            <Pelicula generos={["Fantasia","Aventuras"]} rating={8.0} titulo="Harry Potter" />
            <Pelicula generos={["Animacion","Familiar"]} rating={7.5} titulo="Toy Story" />
            <Pelicula generos={["Drama"]} rating={1.5} titulo="Her" />
            <Pelicula rating={9.0} titulo="Parasite" />
            <Pelicula generos={["Accion","Aventuras"]} rating={4.0} titulo="Transformers" />
        </div>
  );
  }
}

export default TiraPeliculas;
