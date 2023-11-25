import React from 'react'
import '../PCArchivosCss/ContenidoPC.css'
function ContenidoPC({titulo, cuerpo}) {
  return (
    <div className="div-info-post">
      <h2 className="titulo-post">{titulo}</h2>
      <p className="info-post">{cuerpo}</p>
    </div>
  )
}

export default ContenidoPC