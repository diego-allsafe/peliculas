import React, {Component} from 'react';



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
        .catch(error=>console.error(error))
  }

  componentDiMount(){
    console.log("Me monte!!");
    this.apiCall('https://api.giphy.com/v1/gifs/trending?api_key=EnY6NrEIjXkvff6T92lNZ3SQSnEiupBA&limit=25&rating=g',this.mostrarGif);
  }

  mostrarGif=(data)=>{
    this.setState(
      {
        gif:data.data.image_url
      }
    )
  }

  componentDiUpdate(){
    console.log("Me actualice!!");
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
            <button>Random Gif!</button>
      </div>
      
    );
  }
}


export default Gif;