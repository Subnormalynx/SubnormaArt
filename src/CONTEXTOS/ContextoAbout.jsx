import React from 'react'
import { useState, useContext, createContext } from 'react';

const boolAbout = createContext();
const setBoolAbout = createContext();

export function useBoolAbout() {
	return useContext(boolAbout);
}
export function useSetBoolAbout() {
	return useContext(setBoolAbout)
}

export function ContextoAbout({ children }) {
  const [mostrarAbout, setMostrarAbout] = useState(false);
	const cambiarBoolABout = () => {
		setMostrarAbout(!mostrarAbout)
	}

	return (
		<boolAbout.Provider value={mostrarAbout}>
			<setBoolAbout.Provider value={cambiarBoolABout}>
				{children}
			</setBoolAbout.Provider>
		</boolAbout.Provider>
	)
}

export default ContextoAbout