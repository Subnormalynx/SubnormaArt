import React, { useState, useEffect } from 'react'
import './PaginaInicio.css'
import { useContextosLogin, useContextosLoginLocalStorage } from '../../CONTEXTOS/ContextoLogin.jsx'
import { useBoolAbout, useSetBoolAbout } from '../../CONTEXTOS/ContextoAbout.jsx'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
//COMPONENTES
import Header from '../../COMPONENTES-EHTML/HeaderComp/Header.jsx'
import PaginaAbout from '../About/PaginaAbout'
import Boton from '../../COMPONENTES-EHTML/BotonComp/Boton.jsx'
import ImgPUC from '../../COMPONENTES-EHTML/ImgPerfilUsComp/ImgPUC.jsx'
import Login from '../../LOGIN/Login.jsx'

function PaginaInicio() {
  const BA = useBoolAbout();
  const sBA = useSetBoolAbout();
  const CL = useContextosLogin();
  
  return (
    <div id="contenedor-inicio">
      <CSSTransition
        in={!CL[2]}
        timeout={2000}
        classNames='login'
        unmountOnExit
      > 
        <Login />
      </CSSTransition>
      <Header />
      <div id="contenedor-contenido-inicio">
        <div id="div-articulo-navegador-CCI">
          <div id='div-navegador' >
            <Link to='/perfil'>
              <ImgPUC clase='imagen-perfil-us-DN'/>
            </Link>
            <Link to='/editor'>
              <Boton clase='tab-DN' texto='publicar' />
            </Link>
            <Link to='/amigos'>
              <Boton clase='tab-DN' texto='amigos' />
            </Link>
            <Boton clase='tab-DN' texto='about us' callb={(e) => {e.stopPropagation(), sBA()}}/>
          </div>
          <div id="div-articulo-CCI">
          </div>
        </div>
        <aside id="aside-noticia-CCI">
          <div id="div-clima-ANCCI">clima</div>
          <div id="div-noticia-ANCCI">noticias</div>
        </aside>
      </div>
      <CSSTransition
      in={BA}
      timeout={400}
      classNames='fade'
      unmountOnExit
      >
        <PaginaAbout />
      </CSSTransition>
    </div>
  )
}


export default PaginaInicio