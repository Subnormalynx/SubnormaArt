import React from 'react'
import './PaginaPerfil.css'
import { useContextosLogin, useContextosLoginLocalStorage } from '../../CONTEXTOS/ContextoLogin.jsx'
import Header from '../../COMPONENTES-EHTML/HeaderComp/Header.jsx'
import vite from '/public/vite.svg';
import Hobby from './HobbyComp/Hobby.jsx';
import Contacto from './ContactoComp/Contacto.jsx';
import { useState } from 'react';
import { useMemo } from 'react';

function PaginaPerfil() {
	const CLA = useContextosLogin();
	const CL = CLA[4];
	const [nombre, setNombre] = useState(CL?.nombreUsuario);
	const [spanAmigos, setSpanAmigos] = useState(CL?.amigos?.length ?? 0);

	const agregarHobby = useMemo(() => {
		return CL?.hobbys?.map((h) => {
			console.log(h);
			return <Hobby hobby={h} key={h + '-hobby-perfil-key'} />;
		});
	}, [CL?.hobbys]);
	const agregarContacto = useMemo(() => {
		return CL?.contactos?.map((c) => {
			console.log(c);
			return <Contacto link={'#'} contacto={c} key={c + '-contacto-perfil-key'} />;
		});
	}, [CL?.contactos]);



	return (
		<div id='contenedor-perfil'>
			<Header btnVolver={true} />
			<div id="div-imagenes-perfil">
				<div id="div-IPerfil">
					<img src={vite} alt="no se encontro img de portada" id='imagen-portada-perfil' />
					<img src={vite} alt="no se encontro img de perfil" id='imagen-personal-perfil'/>
				</div>
			</div>
			<div id="div-informacion-perfil">
				<div id="div-InPerfil">
					<div id="div-publicacion-InPerfil">
						<div id="prueba-post"></div>
					</div>
					<div id="div-info-InPerfil">
						<div id="div-info-personal-IInPerfil" className='div-info-perfiles'>
							<div id="div-nombre-IPIInPerfil">
								<h2 id="nombre-usuario-perfil">{nombre}</h2>
							</div>
							<div id="div-descripcion-IPIInPerfil">
								<p id="descripcion-usuario-perfil">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed at id ullam pariatur iste nam perspiciatis incidunt voluptas nostrum et!</p>
							</div>
						</div>

						<div id="div-hobbys-IInPerfil" className='div-info-perfiles'>
							<div id="div-titulo-hobbys-IInPerfil">
								<h3 id="titulo-hobbys-perfil">Pasatiempos y Gustos</h3>
							</div>
							<div id="lista-hobbys-IInPerfil" className='div-lista-HC-perfil'>
								{agregarHobby}
							</div>
						</div>
						<div id="div-contactos-IInPerfil" className='div-info-perfiles'>
							<div id="div-titulo-contactos-IInPerfil">
								<h3 id="titulo-contactos-perfil">Contactos</h3>
							</div>
							<div id="lista-contactos-IInPerfil" className='div-lista-HC-perfil'>
								{agregarContacto}
							</div>
						</div>
						<div id="div-amigos-IInPerfil" className='div-info-perfiles'>
							<div id="div-titulo-amigos-IInPerfil">
								<h3 id="titulo-amigos-perfil">Amigos: </h3>
								<span id='span-amigos-perfil'>{spanAmigos}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaginaPerfil