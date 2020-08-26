import React from 'react';



function ContenedorPublicidad(props) {
  return (
    <div>
      <p>---Inicio de Espacio publicitario---</p>
      {props.children}
      <p>---Fin de Espacio publicitario---</p>

    </div>
  );
 }

export default ContenedorPublicidad;
