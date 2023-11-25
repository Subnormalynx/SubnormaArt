import React from 'react'
import './Contacto.css'

function Contacto({ link, contacto }) {
	return (
		<a href={link} className='link-contacto-perfil'>
			<p className="contacto-perfil">{contacto}</p>
		</a>	
	)
}

export default Contacto