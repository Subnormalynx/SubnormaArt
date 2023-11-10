import React, { useState, useRef } from 'react'
import Header from '../../COMPONENTES-EHTML/HeaderComp/Header.jsx'
import { Link } from 'react-router-dom'
import PaginaAbout from '../About/PaginaAbout'
import './PaginaInicio.css'
import Boton from '../../COMPONENTES-EHTML/BotonComp/Boton.jsx'
import ImgPUC from '../../COMPONENTES-EHTML/ImgPerfilUsComp/ImgPUC.jsx'
import { SwitchTransition, CSSTransition } from 'react-transition-group'


function PaginaInicio({nombre='perfilUs'}) {

  const [mostrarAbout, setMostrarAbout] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div id="contenedor-inicio">
      <Header />
      <div id="contenedor-contenido-inicio">
        <div id="div-articulo-navegador-CCI">
          <div id='div-navegador' >
            <Link to={'/' + nombre}>
              <ImgPUC clase='imagen-perfil-us-DN'/>
            </Link>
            <Link to='/'>
              <Boton clase='tab-DN' texto='inicio' />
            </Link>
            <Link to='/editor'>
              <Boton clase='tab-DN' texto='publicar' />
            </Link>
            <Link to='/amigos'>
              <Boton clase='tab-DN' texto='amigos' />
            </Link>
            <Boton clase='tab-DN' texto='about us' callb={() => {setMostrarAbout(!mostrarAbout)}}/>
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
      in={mostrarAbout}
      timeout={600}
      classNames='fade'
      unmountOnExit
      >
        <PaginaAbout />
      </CSSTransition>
    </div>
  )
}


export default PaginaInicio