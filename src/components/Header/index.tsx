import Router from 'next/router';
import {HeaderContainer} from './styles';

export default function Header() {
	function handleExit() {
		Router.push('/login');
	}

	function handleGoHome() {
		Router.push('/');
	}

	return (
		<HeaderContainer>
			<img onClick={handleGoHome} src="logo.png" alt="Nave.rs"/>
			<p onClick={handleExit} >
				Sair
			</p>
		</HeaderContainer>
	)
}