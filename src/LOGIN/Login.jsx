import React from 'react'
import './Login.css'
import FormLogin from './FORMLOGIN/FormLogin'

function Login() {
	return (
		<div id="contenedor-login">
			<div id="div-titulo-login">
				<h2 id="titulo-login">SubnormaArt</h2>
			</div>
			<div id="div-form-login">
				<FormLogin />
			</div>
		</div>
	)
}

export default Login