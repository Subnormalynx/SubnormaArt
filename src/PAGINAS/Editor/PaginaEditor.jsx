import React from 'react'
import './PaginaEditor.css'
import Header from '../../COMPONENTES-EHTML/HeaderComp/Header';
import Boton from '../../COMPONENTES-EHTML/BotonComp/Boton'
import { Link } from 'react-router-dom';

function PaginaEditor({}) {
  return (
    <div id='contenedor-editor'>
      <Header btnVolver={true} />
      <div id="div-inputEditor-aside">
        <div id="div-input-editor">
          <h1 id='titulo-editor'>Crea tus publicaciones aqui y expresate...</h1>
          <label className='label-input-IE'>
            Titulo
            <textarea name="input-titulo-IE" id="input-titulo-IE" placeholder='Un buen titulo que llame la atencion...'></textarea>
          </label>
          <label className='label-input-IE'>
            Cuerpo
            <textarea name="input-cuerpo-IE" id="input-cuerpo-IE" placeholder='Un buen cuerpo que trasmita claramente tu mensaje...' ></textarea>
          </label>
          <Boton idB='boton-crear-publicacion' texto='publicar' key='boton-crear-publicacion-key' wFontB='1.2rem' />
        </div>
        <div id="div-input-imagen">
          pronto podras poner imagenes en tus publicaciones:D
        </div>
      </div>
    </div>
  )
}

export default PaginaEditor