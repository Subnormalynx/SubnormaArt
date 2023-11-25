import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContextoDB from './DB/DB.jsx';
import ContextoLogin, { useContextosLogin }  from './CONTEXTOS/ContextoLogin.jsx'
import ContextoAbout from './CONTEXTOS/ContextoAbout'
import PaginaInicio from './PAGINAS/Inicio/PaginaInicio'
import PaginaEditor from './PAGINAS/Editor/PaginaEditor'
import PaginaAmigos from './PAGINAS/Amigos/PaginaAmigos'
import PaginaPerfil from './PAGINAS/Perfil/PaginaPerfil'
import { useEffect } from 'react'

function App() {
  
  return (
    <>
      <ContextoDB>
        <ContextoLogin>
          <ContextoAbout>
            <Router>
              <Routes>
                <Route path='/' element={<PaginaInicio />}/>
                <Route path='/perfil' element={<PaginaPerfil />}/>
                <Route path='/editor' element={<PaginaEditor />}/>
                <Route path='/amigos' element={<PaginaAmigos />}/>
              </Routes>
            </Router>
          </ContextoAbout>
        </ContextoLogin>
      </ContextoDB>
    </>
  )
}
  
export default App
