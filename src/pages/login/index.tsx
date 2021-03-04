import {LoginContainer, LoginPage} from './styles';

export default function login() {
	return (

		<LoginPage>

			<LoginContainer>
				<header>
					<img src="logo.png" alt="Nave.rs"/>
				</header>

				<div className="inputs">
					<div className="input">
						<label htmlFor="input">E-mail</label>
						<input type="email"/>
					</div>
					<div className="input">
						<label htmlFor="input">Senha</label>
						<input type="password"/>
					</div>
				</div>

				<button>
					Entrar
				</button>
			</LoginContainer>
		</LoginPage>
	)
}