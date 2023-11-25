import React from 'react';
import '../PCArchivosCss/CajaComentarioPC.css';

function CajaComentarioPC({imgPerfil, nombre, texto}) {
  return (
    <div className='div-comentario-post'>
      <div className='div-info-usuario-comentario-post'>
        <img src={imgPerfil} className='img-perfil-comentario'/> 
        <h4 className='nombre-comentario'>{nombre}</h4>
      </div>
      <div className='div-texto-comentario'>
        <p className='texto-comentario'>{texto}</p>
      </div>
    </div>
  )
}

export default CajaComentarioPC