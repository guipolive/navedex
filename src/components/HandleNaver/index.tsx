import Router from 'next/router';

import Input from '../Input';
import {HandleNaverContainer, HandleNaverWrapper} from './styles';

interface HandleNaverProps {
	title: string;
}

export default function HandleNaver(props: HandleNaverProps) {
	function handleGoBack() {
		Router.push('/');
	}

	return(
		<HandleNaverWrapper>

			
			<HandleNaverContainer>
				<header onClick={handleGoBack} >
					<img src="chevron-left.svg" alt="Voltar"/>
					<h2>{props.title}</h2>
				</header>

				<div className="inputs">
					<Input 
						className="input"
						label="Nome"
						placeholder="Nome"
						value="0"
						/>
					
					<Input 
						className="input"
						label="Cargo"
						placeholder="Cargo"
						value="0"
						/>
					
					<Input 
						className="input"
						label="Idade"
						placeholder="Idade"
						value="0"
						/>
					
					<Input 
						className="input"
						label="Tempo de empresa"
						placeholder="Tempo de empresa"
						value="0"
						/>

					<Input 
						className="input"
						label="Projetos que participou"
						placeholder="Tempo de empresa"
						value="0"
						/>

					<Input 
						className="input"
						label="URL da foto"
						placeholder="Tempo de empresa"
						value="0"
						/>
				</div>

				<button>
					Salvar
				</button>
			</HandleNaverContainer>
		</HandleNaverWrapper>
	)
}