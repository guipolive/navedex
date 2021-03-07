import Router from 'next/router';
import Link from 'next/link';
import {Naver} from './styles';
import { useState } from 'react';
import Modal__Simple from '../Modal__Simple';
import api from '../../functions/api';

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

	const [isShowNaverModalOpen, setIsShowNaverModalOpen] = useState(false);
	const [isEditNaverModalOpen, setIsEditNaverModalOpen] = useState(false);
	const [isRemoveNaverModalOpen, setIsRemoveNaverModalOpen] = useState(false);
	
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	const [isExcluindo, setIsExcluindo] = useState('Excluir');

	function handleRemoveNaver() {
		setIsExcluindo('Excluindo...');
		api.delete(`/navers/${props.id}`)
			.then(function (response) {
				setIsRemoveNaverModalOpen(false);
				setIsExcluindo('Excluir');
			})
			.catch(function (error) {
				console.log(error, error.response);
				setIsErrorModalOpen(true);
				setIsExcluindo('Excluir');
			});
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
					onClick={() => setIsRemoveNaverModalOpen(true)}
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

			{isRemoveNaverModalOpen &&
				<Modal__Simple
					title="Excluir Naver"
					body="Tem certeza de que deseja excluir este naver?"
					onClose={() => setIsRemoveNaverModalOpen(false)}
				>
					<button onClick={() => setIsRemoveNaverModalOpen(false)} >
						Cancelar
					</button>
					
					<button onClick={handleRemoveNaver} >
						{isExcluindo}
					</button>
				</Modal__Simple>
			}

			{isErrorModalOpen && 
				<Modal__Simple 
					title="Erro!"
					body="Erro ao tentar realizar a ação desejada. Por favor, tente novamente."
					onClose={() => setIsErrorModalOpen(false)}
				/>
			}
		</Naver>
	)
}
