import {Naver} from './styles';

export function NaverCard() {
	return(
		<Naver>
			<img className="naver__image" src="temp_naver.png" alt="Nome do Naver"/>
			<p className="naver__name">Juliano Reis</p>
			<p className="naver__role">Front-end Developer</p>
			<div className="naver__actions">
				<img className="naver__action" src="delete.svg" alt="Excluir"/>
				<img className="naver__action" src="edit.svg" alt="Edit"/>
			</div>
		</Naver>
	)
}