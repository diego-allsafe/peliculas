import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Peliculas.css";


class Contador extends Component {

  constructor(props){
    super(props)
    this.state={
      numero: props.inicial
    }
  }

  render() {
    return (
      <div>
          <p>Soy en número {this.state.numero}</p>
      </div>
    );
}

export default Contador;