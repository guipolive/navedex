import Router from 'next/router';
import Link from 'next/link';
import {Naver} from './styles';
import { useState } from 'react';
import Modal__Simple from '../Modal__Simple';
import Modal__ShowNaver from '../Modal__ShowNaver';
import api from '../../functions/api';

import {mutate as globalMutate} from 'swr';

interface NaverProps {
	id: string;
	name: string;
	admission_date: string;
	job_role: string;
	url: string;
	// user_id: string;
	project: string;
	birthdate: string;
}

export function NaverCard(props: NaverProps) {

	const [isShowNaverModalOpen, setIsShowNaverModalOpen] = useState(false);
	const [isEditNaverModalOpen, setIsEditNaverModalOpen] = useState(false);
	const [isRemoveNaverModalOpen, setIsRemoveNaverModalOpen] = useState(false);
	const [isExcludedModalOpen, setIsExcludedModalOpen] = useState(false);
	
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	const [isExcluindo, setIsExcluindo] = useState('Excluir');

	function handleRemoveNaver() {
		setIsExcluindo('Excluindo...');
		api.delete(`/navers/${props.id}`)
			.then(function (response) {
				globalMutate('/navers');
				setIsRemoveNaverModalOpen(false);
				setIsExcludedModalOpen(true);
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
			<img 
				className="naver__image"
				src={props.url}
				alt="Nome do Naver"
				onClick={() => setIsShowNaverModalOpen(true)}
			/>
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

			{isExcludedModalOpen && 
				<Modal__Simple 
					title="Naver excluído!"
					body="Naver excluído com sucesso."
					onClose={() => setIsExcludedModalOpen(false)}
				/>
			}

			{isShowNaverModalOpen &&
				<Modal__ShowNaver
					onClose={() => setIsShowNaverModalOpen(false)}
				>
					<img 
						src={props.url}
						alt={props.name}
						className="naver-photo"
					/>

					<div className="info">
						<h2>{props.name}</h2>
						<p>{props.job_role}</p>

						<strong>Idade</strong>
						<p>{props.birthdate}</p>
						
						<strong>Tempo de empresa</strong>
						<p>{props.admission_date}</p>
						
						<strong>Projetos</strong>
						<p>{props.project}</p>

						<div className="actions">
							<img 
								className="naver__action" 
								onClick={() => {
									setIsRemoveNaverModalOpen(true);

								}}
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

					</div>

				</Modal__ShowNaver>
			}
		</Naver>
	)
}
