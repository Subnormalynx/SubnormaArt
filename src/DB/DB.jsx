import React, { useEffect, useState, useContext, createContext  } from 'react';
import vite from 'public/vite.svg';

const DBContext = createContext();
const DBLocalStorage = createContext();

export function useDB() {
  return useContext(DBContext);
}
export function useDBLocalStorage() {
  return useContext(DBLocalStorage);
}

export function ContextoDB({ children }) {
  const [usuarios, setUsuarios] = useState(() => {return [
    {
      nombre: "Ana Pérez",
      descripcion: "Me encanta viajar y conocer nuevas culturas",
      intereses: ["Turismo", "Literatura", "Música pop"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Carlos García",
      descripcion: "Soy ingeniero informático y me apasiona la programación",
      intereses: ["Tecnología", "Videojuegos", "Rock"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "María López",
      descripcion: "Soy estudiante de medicina y me gusta ayudar a los demás",
      intereses: ["Salud", "Voluntariado", "Yoga"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Luis Rodríguez",
      descripcion: "Soy profesor de historia y me fascina el arte",
      intereses: ["Cultura", "Pintura", "Cine"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Sofía Martínez",
      descripcion: "Soy diseñadora gráfica y me encanta la fotografía",
      intereses: ["Arte", "Moda", "Naturaleza"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Diego Sánchez",
      descripcion: "Soy chef profesional y me gusta experimentar con nuevos sabores",
      intereses: ["Gastronomía", "Viajes", "Deportes"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Laura González",
      descripcion: "Soy abogada y me interesa la justicia social",
      intereses: ["Derecho", "Política", "Música clásica"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Pedro Hernández",
      descripcion: "Soy músico y me gusta tocar la guitarra",
      intereses: ["Rock", "Blues", "Jazz"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Elena Torres",
      descripcion: "Soy psicóloga y me gusta escuchar a las personas",
      intereses: ["Psicología", "Meditación", "Animales"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Jorge Ramírez",
      descripcion: "Soy escritor y me gusta crear historias fantásticas",
      intereses: ["Literatura", "Cine", "Magia"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Sara Jiménez",
      descripcion: "Soy maestra de primaria y me gusta enseñar a los niños",
      intereses: ["Educación", "Manualidades", "Dibujos animados"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
    {
      nombre: "Miguel Álvarez",
      descripcion: "Soy mecánico y me gusta arreglar coches",
      intereses: ["Automóviles", "Motos", "Metal"],
      imgPerfil: vite,
      imgPortada: vite,
      contactos: undefined,
      amigos: undefined,
      agregado: false,
    },
  ];});
  const [DBUsuarios , setDBUsuarios] = useState(() => {
    try {
      return localStorage.getItem('db_usuarios') || usuarios;
    } catch (error) {
      return usuarios;
    }
  })
  const indexUsDB = () => {
    usuarios.map((u , i) => {
      let id = `${u.nombre}-${i}-id`;
      setDBUsuarios(DBUsuarios[i] = { ...u, idUsuario: id, indiceLista: i});
    });
  }
  const subirBajarDBLocalStorage = () => {
    localStorage.setItem('db_usuarios', JSON.stringify(usuarios));
  }
  indexUsDB();
  
  return(
    <DBContext.Provider value={DBUsuarios}>
      <DBLocalStorage.Provider value={subirBajarDBLocalStorage}>
        {children}
      </DBLocalStorage.Provider>
    </DBContext.Provider>
  )
  
}

export default ContextoDB;

