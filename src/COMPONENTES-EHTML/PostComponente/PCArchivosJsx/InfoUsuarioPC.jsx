import React from 'react';
import '../PCArchivosCss/InfoUsuarioPC.css';

function InfoUsuarioPC({nombre, imgPerfil, fecha}) {
  return (
    <div className="div-info-usuario-post">
      <img src={imgPerfil} className="imagen-perfil-post"></img>
      <div className="div-nombre-fecha-post">
        <h3 className="nombre-post">{nombre}</h3>
        <p className="fecha-post">{fecha}</p>
      </div>
    </div>
  )
}

export default InfoUsuarioPC