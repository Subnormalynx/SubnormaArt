import React, { useEffect, useState } from 'react';
import RComentariosPC from './RComentariosPC';
import '../PCArchivosCss/ReaccionesPC.css'

function ReaccionesPC({indicePost, nombre, imgPerfil}) {
  let jsonListaPost = JSON.parse(localStorage.getItem('lista_post_usuario'));
  let jsonPost = jsonListaPost[indicePost];
  console.log(jsonPost + ' esto es el post');

  const [likes, setLikes] = useState(parseInt(jsonPost.likes) || 0);
  const [liked, setLiked] = useState(jsonPost.liked == true || false);
  const [spanCom, setSpanCom]= useState(jsonPost.comentarios.length || 0);
  const [clickCom, setClickCom]= useState(false);
  const [spanShare, setSpanShare]= useState(0);

  const eventoLike = () => {
    if (!liked) {
      const nuevosLikes = likes + 1;
      setLikes(nuevosLikes);
      jsonPost.likes = nuevosLikes;
      setLiked(true);
      jsonPost.liked = true;
      let a = [];
      jsonListaPost.splice(jsonListaPost[indicePost], jsonPost);
      localStorage.setItem('lista_post_usuario', JSON.stringify(jsonListaPost));
      jsonPost = jsonListaPost[indicePost];
    } else {
      const nuevosLikes = likes - 1;
      setLikes(nuevosLikes);
      jsonPost.likes = nuevosLikes;
      setLiked(false);
      jsonPost.liked = false;
      jsonListaPost.splice(jsonListaPost[indicePost], jsonPost);
      localStorage.setItem('lista_post_usuario', JSON.stringify(jsonListaPost));
      jsonPost = jsonListaPost[indicePost];
    }
  };
  useEffect(() => {
    eventoCambioSpan();
  },[])
  const eventoCambioSpan = () => {
    let scom = jsonPost.comentarios.length;
    scom.addEventListener('change', () => {
      setSpanCom(scom);
    })
  }
  const eventoClickComentar = () => {
    setClickCom(!clickCom);
  }

  return (
    <>
      <div className="div-interaccion-post">
        <div className="div-interacciones-post">
          <div className="div-interaccion-span-post">
            <p className={liked ? 'bi bi-hearts interaccion-post like-dado' : 'bi bi-hearts interaccion-post'} title="Dar me gusta a este post..." onClick={eventoLike} disabled={liked}></p>
            <span className="span-int-like-post span-int-post" >{likes}</span>
          </div>
          <div className="div-interaccion-span-post">
            <p className="bi bi-chat-square-dots interaccion-post" title="Comentar este post..." onClick={eventoClickComentar}></p>
            <span className="span-int-comment-post span-int-post">{spanCom}</span>
            
          </div>
          <div className="div-interaccion-span-post">
            <p className="bi bi-share interaccion-post" title="Compartir este post..."></p>
            <span className="span-int-share-post span-int-post">{spanShare}</span>

          </div>
        </div>
      </div>
      {clickCom ? <RComentariosPC indicePost={indicePost} imgPerfil={imgPerfil} nombre={nombre}/> : ''}
    </>
  )
}

export default ReaccionesPC