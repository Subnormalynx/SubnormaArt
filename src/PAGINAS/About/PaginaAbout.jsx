import React, { useEffect, useState } from 'react'
import { useBoolAbout, useSetBoolAbout } from '../../CONTEXTOS/ContextoAbout.jsx'
import './PaginaAbout.css'

function PaginaAbout() {
  const BA = useBoolAbout();
  const sBA = useSetBoolAbout();

  useEffect(() => {
    const contenedorAbout = document.getElementById('contenedor-about');
    document.addEventListener('click',(e) => {
      let clickDentro = contenedorAbout.contains(e.target);
      if (!clickDentro && BA === true) {
        sBA();
      }
    })
  
    return () => {
      document.removeEventListener;
    }
  })
  
  return (
  <div id='contenedor-about' >
    <h2 id="titulo-about">SubnormaLynx</h2>
    <p id="parrafo-about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id labore quisquam optio dolore repudiandae cumque dolores, nam, reiciendis tempora dolorem distinctio error aut ut eius quia vitae architecto iusto velit adipisci itaque, deleniti molestias aspernatur quas aperiam! Nihil excepturi quaerat repudiandae reprehenderit minima quasi aliquid facilis culpa, eum blanditiis dolore.</p>
    <div id="div-links-about">
      <a href="http://" className="link-about">
        <p className="icon-link-about">W</p>
      </a>
      <a href="http://" className="link-about">
        <p className="icon-link-about">I</p>
      </a>
      <a href="http://" className="link-about">
        <p className="icon-link-about">L</p>
      </a>
      <a href="http://" className="link-about">
        <p className="icon-link-about">Y</p>
      </a>
      <a href="http://" className="link-about">
        <p className="icon-link-about">G</p>
      </a>
      <a href="http://" className="link-about">
        <p className="icon-link-about">T</p>
      </a>
    </div>
    <p id="version-about">v1.0.1</p>
  </div>
)
}

export default PaginaAbout