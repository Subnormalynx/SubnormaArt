import React from 'react';
import { useState } from "react";
import "../PCArchivosCss/Post.css";
import InfoUsuarioPC from './InfoUsuarioPC.jsx';
import ContenidoPC from './ContenidoPC.jsx';
import ReaccionesPC from './ReaccionesPC.jsx';
import ImgCuerpoPC from './ImgCuerpoPC.jsx';

function Post({nombre,imgPerfil,fecha,titulo,cuerpo,imgCuerpo,indicePost}) {
  return (
    <div className="post">
      <div className="div-post-info">
        <InfoUsuarioPC nombre={nombre} imgPerfil={imgPerfil} fecha={fecha}/>
        <ContenidoPC titulo={titulo} cuerpo={cuerpo}/>
      </div>
      <ImgCuerpoPC imgCuerpo={imgCuerpo}/>
      <ReaccionesPC indicePost={indicePost} imgPerfil={imgPerfil} nombre={nombre} />
    </div>
    )
}
export default Post