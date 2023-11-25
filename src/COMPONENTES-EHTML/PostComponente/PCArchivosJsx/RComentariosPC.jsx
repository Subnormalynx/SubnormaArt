import React, { useEffect } from 'react';
import CajaComentarioPC from './CajaComentarioPC';
import ReactDOM from 'react-dom/client'
import { render } from 'react-dom'
import '../PCArchivosCss/RComentariosPC.css';

function RComentariosPC({indicePost, nombre, imgPerfil}) {
  let jsonListaPost = JSON.parse(localStorage.getItem('lista_post_usuario'));
  let jsonPost = jsonListaPost[indicePost];
  let divCP;
  

  const agregarListaComentarios = () => {
    let jsonPostCom = jsonPost.comentarios;
    const mapPostCom = jsonPostCom.map(c => {
        return <CajaComentarioPC nombre={nombre} imgPerfil={imgPerfil} texto={c.texto} key={`comentario-${jsonPostCom.indexOf(c)}-post-${indicePost}-key`}/>
    })
    divCP.render(
      <>{mapPostCom}</>
    )
  }
  const agregarComentario = () => {
    let jsonPostCom = jsonPost.comentarios;
    let argumento = `input-${nombre}-${indicePost}-comentarios-post`;
    let inputComentarios = document.getElementById(argumento);
    let vInputComentarios = inputComentarios.value;

    if (vInputComentarios == '') {
      alert('no puedes enviar el comentario porque aun no escribes algo...');
      return
    } else {
      const jsonComentario = {
        nombre: nombre,
        imgPerfil: imgPerfil,
        texto: vInputComentarios,
      }
      console.log(jsonComentario);
      jsonPostCom.push(jsonComentario);
      jsonListaPost.splice(jsonListaPost[indicePost].comentarios, jsonPostCom);
      localStorage.setItem('lista_post_usuario', JSON.stringify(jsonListaPost));
      agregarListaComentarios();
      inputComentarios.value = '';
    }
  }
  useEffect(() => {
    setTimeout(() => {
      let argumentoRoot = `div-${nombre}-${indicePost}-comentarios-post`;
      divCP = ReactDOM.createRoot(document.getElementById(argumentoRoot));
      agregarListaComentarios();
    }, 100);
  }, []);
  return (
    <div className='contenedor-comentarios-post'>
      <div className='div-comentarios-post' id={`div-${nombre}-${indicePost}-comentarios-post`}></div>
      <div className='div-input-boton-comentarios-post'>
        <textarea className="input-comentario-post" placeholder='agrega un comentario al post...' id={`input-${nombre}-${indicePost}-comentarios-post`}></textarea>
        <button className='boton-enviar-comentario' onClick={agregarComentario}>enviar</button>
      </div>
    </div>
  )
}

export default RComentariosPC