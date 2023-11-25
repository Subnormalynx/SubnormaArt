import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { render, unmountComponentAtNode} from 'react-dom';
import Perfil from '../PerfilComponente/PCArchivosJsx/Perfil.jsx';
import { rootPerfilAmigos } from '../rootsIndex/RootsIndex.jsx';
import "./AmigoBuscado.css";

function AmigoBuscado({nombre,imgPerfil,indice,idU}) {
  let perfilComp;
  const mostrarContenedor = () => {
    const target = Array.from(document.querySelectorAll('[data-target]'));
    const content = Array.from(document.querySelectorAll('[data-content]'));
    target.forEach(target => {
      target.addEventListener('click',() => {
        let btnVIID = target.getAttribute('id');
        if (btnVIID != 'boton-volver-inicio') {
          let activo = true;
          mostrarBotonVolverIinicio(activo);
          
        } else if (btnVIID == 'boton-volver-inicio'){
          let activo = false;
          mostrarBotonVolverIinicio(activo);
          eliminarPerfil();
        }
        content.forEach(c => {
          c.classList.remove('active');
        })
        const t = document.querySelector(target.dataset.target);
        t.classList.add('active');
      });
    });
    const mostrarBotonVolverIinicio = (activo) => {
      if (activo) {
        botonVolverInicio.style.display = 'flex';
        tituloHeader.style.left = '5rem';
        setTimeout(() => {
          botonVolverInicio.style.opacity = '1';
        }, 10);
      } else {
        botonVolverInicio.style.opacity = '0';
        tituloHeader.style.left = '0';
        setTimeout(() => {
          botonVolverInicio.style.display = 'none';
        }, 100);
      }
    }
  }
  const eliminarPerfil = () => {
    try {
      let contenedorPerfilAmigos = document.getElementById('contenedor-perfil-amigos');
      unmountComponentAtNode(document.getElementById(contenedorPerfilAmigos));
      console.log('Se elimino el comp');
    } catch (error) {
      console.log('no era el perfil');
    }
  }
  const [amigoAgregado,setAmigoAgregado]= useState();
  const agregarAmigo = () => {
    amigoAgregado ? console.log('eliminado') : console.log('agregado');
    if (!amigoAgregado) {
      let arrayUsuarios = JSON.parse(localStorage.getItem('lista_usuarios'));
      let arrayAmigoUsuario = JSON.parse(localStorage.getItem('lista_amigos_agregados'));
      
      arrayUsuarios[indice].agregado = true;
      arrayAmigoUsuario.push(arrayUsuarios[indice]);
      localStorage.setItem('lista_amigos_agregados', JSON.stringify(arrayAmigoUsuario));
      console.log('amigo agregado a lista');
    } else {
      let arrayUsuarios = JSON.parse(localStorage.getItem('lista_usuarios'));
      let arrayAmigoUsuario = JSON.parse(localStorage.getItem('lista_amigos-agregados'));
      let iAmigo = arrayAmigoUsuario.findIndex(obj => obj.idUsuario === idU);
      arrayAmigoUsuario.splice(iAmigo, 1);
      arrayUsuarios[indice].agregado = false;
      localStorage.setItem('lista_amigos_agregados', JSON.stringify(arrayAmigoUsuario));
      console.log('amigo eliminado de lista');
      
    }
  }
  const crearPerfilAmigo = () => {
    let arrayUsuario = JSON.parse(localStorage.getItem('lista_usuarios'));
    let indiceAmigo = arrayUsuario.findIndex(obj => obj.idUsuario === idU );
    let iAmigo = arrayUsuario[indiceAmigo];
    perfilComp = arrayUsuario[indiceAmigo];
    console.log(`${perfilComp} estoy mostrando el indice, no funciono`);
    rootPerfilAmigos.render(
      <>
        <Perfil idPerfil={iAmigo.nombre + '-perfil'} nombre={iAmigo.nombre} imgFotoPerfil={iAmigo.imgPerfil} key={iAmigo.nombre + '-perfil-id'} imgPortada={iAmigo.imgPortada}  idDivPostPerfil = {'div-post-perfil-' + iAmigo.nombre} idDivIntereses = {'div-lista-interes-' + iAmigo.nombre} idDivContacto = {'div-lista-contacto-' + iAmigo.nombre} idDivAmigos = {'div-lista-amigos-' + iAmigo.nombre} intereses={iAmigo.intereses} descripcion={iAmigo.descripcion} />
      </>
    )

  }
  useEffect(() => {
    mostrarContenedor();
    
  });
  useEffect(() => {
    let arrayUsuario = JSON.parse(localStorage.getItem('lista_usuarios'));
    let usuarioAgr = arrayUsuario[indice].agregado;
    setAmigoAgregado(usuarioAgr);
  }, []);
  return (
  <div className="div-amigo-inicio">
    <img src={imgPerfil} className="imagen-perfil-amigo-inicio" data-target ="#contenedor-perfil-amigos" onClick={crearPerfilAmigo}></img>
    <div className="div-info-amigo-inicio">
      <h4 className="nombre-amigo-inicio">{nombre}</h4>
      <p className="agregar-amigo-inicio" title="Agrega a este usuario a tu lista de amigos..." onClick={() => {setAmigoAgregado(!amigoAgregado); agregarAmigo();}}>{amigoAgregado ? 'eliminar' : 'agregar'}</p>
    </div>
  </div>
  )
}

export default AmigoBuscado