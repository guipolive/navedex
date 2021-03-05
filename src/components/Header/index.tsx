import Router from 'next/router';
import {HeaderContainer} from './styles';

export default function Header() {
	function handleExit() {
		Router.push('/login');
	}

	return (
		<HeaderContainer>
			<img src="logo.png" alt="Nave.rs"/>
			<p onClick={handleExit} >
				Sair
			</p>
		</HeaderContainer>
	)
}