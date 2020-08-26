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
//Aca yo defino las consecuencias que quiero que sucedan cuando
//sucede el evento.ahora, como los asocio a lugares concretos
//de uestro html?
  lanzarAlerta(){
      alert("Me clickeaste!");
  }

  cambiarAmarillo(){
      document.querySelector("body").style.backgroundColor="yellow"
  }

  cambiarRosa(){
    document.querySelector("body").style.backgroundColor="Pink"
  }
// en el lugar que quiero que suceda, pongo el evento
//si al evento le pongo parentesis de digo que se ejecute ya, si no
//le pongo se ejecuta cuando pase el mouse
   render(){ 
    return (
        <div onClick={this.lanzarAlerta} onMouseOver={this.cambiarAmarillo} onMouseOut={this.cambiarRosa}>

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
