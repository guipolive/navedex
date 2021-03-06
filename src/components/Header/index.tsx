import Router from 'next/router';
import {HeaderContainer} from './styles';

import Image from 'next/image'

import Cookies from 'js-cookie';

export default function Header() {
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
			<p onClick={handleExit} >
				Sair
			</p>
		</HeaderContainer>
	)
}