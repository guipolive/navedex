import {Naver} from './styles';

interface NaverProps {
	// id: string;
	name: string;
	// admission_date: string;
	job_role: string;
	url: string;
	// user_id: string;
	// project: string;
	// birthdate: string;
}

export function NaverCard(props: NaverProps) {
	return(
		<Naver>
			<img className="naver__image" src={props.url} alt="Nome do Naver"/>
			<p className="naver__name">{props.name}</p>
			<p className="naver__role">{props.job_role}</p>
			<div className="naver__actions">
				<img className="naver__action" src="delete.svg" alt="Excluir"/>
				<img className="naver__action" src="edit.svg" alt="Edit"/>
			</div>
		</Naver>
	)
}