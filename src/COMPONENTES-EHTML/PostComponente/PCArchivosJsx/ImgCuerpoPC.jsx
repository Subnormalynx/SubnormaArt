import React from 'react';
import '../PCArchivosCss/ImgCuerpoPC.css';

function ImgCuerpoPC({imgCuerpo}) {
  return (
    <div className="div-imagen-post">
      <img src={imgCuerpo} className="imagen-post"></img>
    </div>
  )
}

export default ImgCuerpoPC