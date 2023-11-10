import React from 'react'
import viteLogo from '/vite.svg'

import './ImgPUC.css'

function ImgPUC({imagen={viteLogo}, idImg, clase}) {
  return (
    <>
      <img src={viteLogo} className={'img-perfiles ' + clase} id={idImg} />
    </>
  )
}

export default ImgPUC