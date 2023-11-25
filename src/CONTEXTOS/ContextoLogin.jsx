import React from 'react'
import { useState, useEffect, useContext, createContext } from 'react';


const contextosLogin = createContext()
const contextosLoginLocalStorage = createContext();

export function useContextosLogin() {
	return useContext(contextosLogin);
}
export function useContextosLoginLocalStorage() {
	return useContext(contextosLoginLocalStorage);
}

//FUNCION PARA EXPORTAR E INYECTAR EL CONTEXTO AL ARBOL DE COMPONENTES
export function ContextoLogin({ children }) {
;
	const [registrado, setRegistrado] = useState(JSON.parse(localStorage.getItem('registrado')) || false);
	const [sesion, setSesion] = useState(JSON.parse(localStorage.getItem('sesion')) || false);
	const [usuario, setUsuario] = useState(() => {
		return {
			nombre: '',
			apellido: '',
			nombreUsuario: '',
			email: '',
			password: '',
			post: [],
			hobbys: ['programacion', 'musica', 'arte'],
			contactos: ['instagram', 'youtube', 'whatsapp'],
			amigos: ['sin amigos uwu'],
		};
  });

	const [ca, setCa] = useState();
	const [cb, setCb] = useState();
	useEffect(() => {
    setUsuario(() => {
      try {
        return JSON.parse(localStorage.getItem('usuario')) || {
          nombre: '',
          apellido: '',
          nombreUsuario: '',
          email: '',
          password: '',
					post: [],
					hobbys: ['programacion', 'musica', 'arte'],
					contactos: ['instagram', 'youtube', 'whatsapp'],
					amigos: ['sin amigos uwu'],
        };
      } catch (error) {
        return {
          nombre: '',
          apellido: '',
          nombreUsuario: '',
          email: '',
          password: '',
					post: [],
					hobbys: ['programacion', 'musica', 'arte'],
					contactos: ['instagram', 'youtube', 'whatsapp'],
					amigos: ['sin amigos uwu'],
        };
      }
    });
		setCa(() => {
			if (typeof registrado != null && typeof registrado != undefined && registrado == true ) {
				return console.log('valor R true establecido');
			} else {
				return console.log('valor R false establecido');
			}
		})
		setCb(() => {
			if (typeof sesion != null && typeof sesion != undefined && sesion == true ) {
				return console.log('valor S true establecido');
			} else {
				return console.log('valor S false establecido');
			}
		});
		ca;
		cb;
  }, []);
	
	const sRTrue = () => {
		setRegistrado(true);
	}
	const sSTrue = () => {
		setSesion(true);
	}
	const registradoLocalStorage = () => {
		localStorage.setItem(`registrado`, JSON.stringify(true));
	}
	const sesionLocalStorage = () => {
		localStorage.setItem('sesion', JSON.stringify(true));
	}
	const usuarioLocalStorage = () => {
		localStorage.setItem('usuario', JSON.stringify(usuario));
	}
	
	
	//SE PASAN TODOS LOS CONTEXTOS PARA SER INYECTADOS EN TODO EL ARBOL DE COMPONENTES
	return (
		<contextosLogin.Provider value={[registrado, sRTrue, sesion, sSTrue, usuario, setUsuario]}>
			<contextosLoginLocalStorage.Provider value={[registradoLocalStorage, sesionLocalStorage, usuarioLocalStorage]}>
				{children}
			</contextosLoginLocalStorage.Provider>
		</contextosLogin.Provider>
										
	)
}

export default ContextoLogin;
 