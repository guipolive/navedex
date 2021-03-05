import Router from 'next/router';
import Input from '../components/Input';
import {LoginContainer, LoginPage} from '../styles/pages/login';

export default function Login() {
	function handleLogin() {
		Router.push('/home');
	}

	return (

		<LoginPage>

			<LoginContainer>
				<header>
					<img src="logo.png" alt="Nave.rs"/>
				</header>

				<div className="inputs">
					<Input 
						className="input"
						label="E-mail"
						placeholder="E-mail"
						value="E-mail"
						type="email"
						/>
					
					<Input 
						className="input"
						label="Senha"
						placeholder="Senha"
						value="Senha"
						type="password"
					/>
				</div>

				<button onClick={handleLogin}>
					Entrar
				</button>
			</LoginContainer>
		</LoginPage>
	)
}