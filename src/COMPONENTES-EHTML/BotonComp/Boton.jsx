import React from 'react'
import './Boton.css'

function Boton({idB, clase, texto, colorB='#0d94ca', wFontB='1rem', callb}) {
  return (
    <>
      <button className={'botones ' + clase} id={idB} style={{background: colorB, fontSize: wFontB}} onClick={callb}>{texto}</button>
    </>
  )
}

export default Boton