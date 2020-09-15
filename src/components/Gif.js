import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Gif extends Component {

  constructor(props){
    super(props);
    this.state={
      gif:""
    }
  }

  apiCall(url, consecuencia){
    fetch(url)
        .then(response=> response.json())
        .then(data=>consecuencia(data))
        .catch(error=>console.log(error))
  }

  componentDiMount(){
    console.log("Me monte!!");
    this.traerGifNuevo()
  }

  traerGifNuevo(){
    this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=EnY6NrEIjXkvff6T92lNZ3SQSnEiupBA&tag=&rating=g',this.mostrarGif);
  }

  mostrarGif=(data)=>{
    this.setState(
      {
        gif:data.data.image_url
      }
    )
    console.log("data",this.state.gif)
  }

  componentDiUpdate(){
    console.log("Me actualice!!");
    alert("Tengo un gif nuevo!")
  }

  render() {
    console.log("Estoy renderizando");

    let contenido;

    if (this.state.gif == "") {
        contenido = <p>Cargando...</p>
    } else {
        contenido = <img src={this.state.gif}></img>
    }

    return (
      <div>
            {contenido}
            <button onClick => { () => traerGifNuevo() }>Random Gif!</button>
      </div>
      
    );
  }
}


export default Gif;
