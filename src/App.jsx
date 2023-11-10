import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginaInicio from './PAGINAS/Inicio/PaginaInicio'
import PaginaEditor from './PAGINAS/Editor/PaginaEditor'
import PaginaAmigos from './PAGINAS/Amigos/PaginaAmigos'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaInicio />}/>
          <Route path='/editor' element={<PaginaEditor />}/>
          <Route path='/amigos' element={<PaginaAmigos />}/>
        </Routes>
      </Router>
    </>
  )
}
  
export default App
