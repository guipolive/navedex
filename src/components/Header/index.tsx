import Router from 'next/router';
import {HeaderContainer} from './styles';

import Image from 'next/image'

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function Header() {
	const [theme, setTheme] = useState(parseInt(window.localStorage.getItem('theme') || '0'));
	const [themeIcon, setThemeIcon] = useState(window.localStorage.getItem('themeIcon') || '/moon.svg');

    useEffect(() => {
			if(theme % 2 > 0){
				document.documentElement.style.setProperty("--color-black", '#FFFF');    
				document.documentElement.style.setProperty("--color-white", "#212121");
				document.documentElement.style.setProperty("--image-filter", "10");
				setThemeIcon('/sun.svg');
			}
			else {
				document.documentElement.style.setProperty("--color-black", '#212121');    
				document.documentElement.style.setProperty("--color-white", "#FFFF");
				document.documentElement.style.setProperty("--image-filter", "0");
				setThemeIcon('/moon.svg');
			}

			window.localStorage.setItem('theme', theme.toString());

    }, [theme]);
	
	function handleExit() {
		Cookies.set('nave_token', '');
		Router.push('/login');
	}

	function handleGoHome() {
		Router.push('/');
	}

	return (
		<HeaderContainer>
			<Image onClick={handleGoHome} width='145' height='40' src="/logo.png" alt="Nave.rs"/>

			<img 
				className="theme-icon"
				src={themeIcon} 
				alt="Mudar tema"
				onClick={() => {
					setTheme(theme + 1);
				}}
			/>

			<p onClick={handleExit} >
				Sair
			</p>
		</HeaderContainer>
	)
}