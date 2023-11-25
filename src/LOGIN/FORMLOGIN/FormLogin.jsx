import React from 'react'
import './FormLogin.css'
import { useState,  useContext, createContext  } from 'react'
import { useContextosLogin, useContextosLoginLocalStorage } from '../../CONTEXTOS/ContextoLogin.jsx'

const emailUs = createContext();
const passwordUs = createContext();

function InputRegistrar() {
	const usJson = useContextosLogin()[4];
	const usJsonContext = useContextosLogin()[5];

	return (
		<>
			<label id="label-input-nombre" className="label-input-formlogin">
				nombre:
				<input type="text" id="input-nombre-formlogin" className="inputs-formlogin" placeholder="Todos te nombran asi, porque no usarlo aqui?..." onChange={(e) => {usJsonContext({...usJson , nombre : e.currentTarget.value})}}/>
			</label>

			<label id="label-input-apellido" className="label-input-formlogin">
				apellido:
				<input type="text" id="input-apellido-formlogin" className="inputs-formlogin" placeholder='Si es que alguien te ubica asi, o es un profesor o eres militar...' onChange={(e) => {usJsonContext({...usJson, apellido : e.currentTarget.value})}}/>
			</label>

			<label id="label-input-usuario" className="label-input-formlogin">
				nombre de usuario:
				<input type="text" id="input-usuario-formlogin" className="inputs-formlogin" placeholder="Tu gran apodo iria bien aqui, todos te encontraran asi en SubnormaArt" onChange={(e) => {usJsonContext({...usJson, nombreUsuario : e.currentTarget.value})}}/>
			</label>

			<label id="label-input-email" className="label-input-formlogin">
				Correo Electronico:
				<input type="email" id="input-email-formlogin" className="inputs-formlogin" placeholder="Tu correo se usara con fines de cripto...mmj, perdon, para inicio de sesion" onChange={(e) => {usJsonContext({...usJson, email : e.currentTarget.value})}}/>
			</label>

			<label id="label-input-password" className="label-input-formlogin">
				Constrasena:
				<input type="password" id="input-password-formlogin" className="inputs-formlogin" placeholder="Usa una segura que ni tu novia toxica pueda saber..." onChange={(e) => {usJsonContext({...usJson, password : e.currentTarget.value})}}/>
			</label>
		</>
	)
}

function InputIniciarSesion() {
	const emailUsContext = useContext(emailUs);
	const passwordUsContext = useContext(passwordUs);

	return (
		<>
			<label id="label-input-email" className="label-input-formlogin">
				Correo Electronico:
				<input type="email" id="input-email-formlogin" className='inputs-formlogin' placeholder="Tu correo para iniciar sesion, por cierto ya lograste recojer 1.2 millones con los crip..." onChange={(e) => {emailUsContext(e.currentTarget.value)}} />
			</label>

			<label id="label-input-password" className="label-input-formlogin">
					Constrasena:
					<input type="password" id="input-password-formlogin" className='inputs-formlogin' placeholder="Esperamos que si seas el usuario, y no la novia..." onChange={(e) => {passwordUsContext(e.currentTarget.value)}} />
			</label>
		</>
	)
}

function FormLogin() {

	const [emailUsEdit, setEmailUsEdit] = useState(null);
	const [passwordUsEdit, setPasswordUsEdit] = useState(null);
	const [guardarSesion, setGuardarSesion] = useState(false);
	const bR = useContextosLogin()[0];
	const sBR = useContextosLogin()[1];
	const BS = useContextosLogin()[2];
	const sBS = useContextosLogin()[3];
	const usJson = useContextosLogin()[4];
	const sUsJson = useContextosLogin()[5];
	const localSR = useContextosLoginLocalStorage()[0];
	const localSS = useContextosLoginLocalStorage()[1];
	const localSU = useContextosLoginLocalStorage()[2];

	const registrarUsuario = () => {
		sBR();
		sBS();
		localSR();
		localSU();
		if (guardarSesion) {
			localSS();
		}
	}
	const iniciarSesionUsuario = () => {
		console.log("Json para iniciar sesion " + usJson);
		if (usJson.email == emailUsEdit && usJson.password == passwordUsEdit) {
			sBS();
			console.log(BS);
			if (guardarSesion) {
				localSS();
			}
		} else {
			if (usJson.email != emailUsEdit && usJson.password != passwordUsEdit) {
				alert('Correo Electronico y constrasena son incorrectos, puede deberse a que aun no estas registrado')
			}
			else if (usJson.email != emailUsEdit) {
				alert('Correo Electronico incorrecto o aun no esta registrado el Correo Electronico');
			}else if (usJson.password != passwordUsEdit) {
				alert('Contrasena incorrecta o aun no esta registrado el Correo Electronico');
			}
		}
	}
	
	
	return (
		<emailUs.Provider value={setEmailUsEdit}>
			<passwordUs.Provider value={setPasswordUsEdit}>
				<div id="contenedor-formlogin">
					<div id="div-titulo-formlogin">
						<h2 id="titulo-formlogin">{bR ? "inicia sesion" : "registrate"}</h2>
					</div>
					<div id="div-input-formlogin">
						{bR ? <InputIniciarSesion /> : <InputRegistrar />}
					</div>
					<div id="div-boton-formlogin">
						<button id="boton-login-formlogin" onClick={bR ? iniciarSesionUsuario : registrarUsuario}>
							{bR ? "inicia sesion" : "registrarse"}
						</button>
					</div>
					<div id="div-guardarsesion-formlogin">
						<label id="label-guardarsesion-formlogin" onClick={() => {setGuardarSesion(!guardarSesion)}}>
							Guardar inicio de sesion
							<input type="checkbox" id="input-check-guardarsesion-formlogin" />
						</label>
					</div>
				</div>
			</passwordUs.Provider>
		</emailUs.Provider>
	)
}

export default FormLogin