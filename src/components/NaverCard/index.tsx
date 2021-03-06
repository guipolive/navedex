import Router from 'next/router';
import Link from 'next/link';
import {Naver} from './styles';

interface NaverProps {
	id: string;
	name: string;
	// admission_date: string;
	job_role: string;
	url: string;
	// user_id: string;
	// project: string;
	// birthdate: string;
}

export function NaverCard(props: NaverProps) {

	function handleRemoveNaver() {
		// Router.push('/delete-naver');
	}

	function handleEditNaver() {
		// Router.push(`/edit-naver/${props.id}`);
	}

	return(
		<Naver>
			<img className="naver__image" src={props.url} alt="Nome do Naver"/>
			<p className="naver__name">{props.name}</p>
			<p className="naver__role">{props.job_role}</p>
			<div className="naver__actions">
				<img 
					className="naver__action" 
					onClick={handleRemoveNaver}
					src="delete.svg" alt="Excluir"
				/>
				<Link 
					href={{
						pathname: `/edit-naver/${props.id}`,
					}}
				>
					<img 
						className="naver__action"
						// onClick={handleEditNaver}
						src="edit.svg" 
						alt="Edit"
					/>
				</Link>
			</div>
		</Naver>
	)
}
