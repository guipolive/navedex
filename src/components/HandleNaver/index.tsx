import Input from '../Input';
import {HandleNaverContainer} from './styles';

export default function HandleNaver() {
	return(
		<HandleNaverContainer>
			<header>
				<img src="chevron-left.svg" alt="Voltar"/>
				<h2>Adicionar Naver</h2>

				<div className="inputs">
					<div className="input">
						<Input 
							label="Nome"
							placeholder="Nome"
							value="0"
						/>
						
						<Input 
							label="Cargo"
							placeholder="Cargo"
							value="0"
						/>
						
						<Input 
							label="Idade"
							placeholder="Idade"
							value="0"
						/>
						
						<Input 
							label="Tempo de empresa"
							placeholder="Tempo de empresa"
							value="0"
						/>

						<Input 
							label="Projetos que participou"
							placeholder="Tempo de empresa"
							value="0"
						/>

						<Input 
							label="URL da foto"
							placeholder="Tempo de empresa"
							value="0"
						/>
					</div>
				</div>
			</header>
		</HandleNaverContainer>
	)
}