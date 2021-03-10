import Router from 'next/router';
import Input from '../components/Input';
import {LoginContainer, LoginPage} from '../styles/pages/login';

import api, {setAccessToken} from '../functions/api';
import { useState } from 'react';

export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	function handleLogin() {
		setIsLoading(true);

		api.post('/users/login', {
			email: email,
			password: password
		}).then(response => {
			setAccessToken(response.data.token);
			Router.push('/home');
		}).catch(error => {
			setIsLoading(false);
			setIsError(true);
			console.log(error, error.response);
			setAccessToken('');
		});
	}
	
	function enterAsPublicUser() {
		setIsLoading(true);

		api.post('/users/login', {
			email: 'testing-user-new@nave.rs',
			password: '1234nave5'
		}).then(response => {
			setAccessToken(response.data.token);
			Router.push('/home');
		}).catch(error => {
			setIsLoading(false);
			setIsError(true);
			console.log(error, error.response);
			setAccessToken('');
		});
	}

	return (

		<LoginPage>

			<LoginContainer>
				<header>
					<img className="login-logo" src="logo.png" alt="Nave.rs"/>
				</header>

				<div className="inputs">
					<Input 
						className="input"
						label="E-mail"
						placeholder="E-mail"
						onChange={e => setEmail(e.target.value)}
						value={email} 
						type="email"
					/>
					
					<Input 
						className="input"
						label="Senha"
						placeholder="Senha"
						onChange={e => setPassword(e.target.value)}
						value={password} 
						type="password"
					/>
				</div>

				{!isLoading && isError &&
					<p className="error">Erro ao tentar fazer login!</p>
				}

				<button onClick={handleLogin}>
					{isLoading && 'Carregando...' || 'Entrar'}
				</button>

				<p 
					className="public-user" 
					onClick={enterAsPublicUser}
				>
					Entrar como usuário público
				</p>
			</LoginContainer>
		</LoginPage>
	)
}