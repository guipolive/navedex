import Router from 'next/router';
import Input from '../components/Input';
import {LoginContainer, LoginPage} from '../styles/pages/login';

import api, {setAccessToken} from '../functions/api';
import { useState } from 'react';

export default function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleLogin() {
		api.post('/users/login', {
			email: email,
			password: password
	}).then(response => {
			setAccessToken(response.data.token);
			// setAuthenticated(true);
			Router.push('/home');
	}).catch(error => {
			console.log(error, error.response);
			setAccessToken('');
			// setIsErrorModalOpen(true);
	});

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

				<button onClick={handleLogin}>
					Entrar
				</button>
			</LoginContainer>
		</LoginPage>
	)
}