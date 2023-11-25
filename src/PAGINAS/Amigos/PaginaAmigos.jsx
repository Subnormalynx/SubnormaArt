import React from 'react'
import Header from '../../COMPONENTES-EHTML/HeaderComp/Header'
import Boton from '../../COMPONENTES-EHTML/BotonComp/Boton'

import './PaginaAmigos.css'

function PaginaAmigos() {
  return (
    <div id="contenedor-amigos">
      <Header btnVolver={true} />
      <div id="div-listaAmigos-aside">
        <div id="div-listaAmigos-titulo">
          <div id="div-titulo-amigos">
            <h2 id="titulo-amigos">Todos tus amigos reunidos aqui:)</h2>
          </div>
          <div id="div-lista-amigos">

          </div>
        </div>
        <div id="div-buscar-amigos">
          <input type="search" name="input-buscar-amigo" id="input-buscar-amigo" placeholder='Encuentra a tu siguiente amigo...'/>
          <div id="div-listaBuscados">
            <div id="lista-buscados">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaginaAmigos