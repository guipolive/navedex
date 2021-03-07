import Router, { useRouter } from 'next/router';

import Image from 'next/image'

import Input from '../Input';
import {HandleNaverContainer, HandleNaverWrapper} from './styles';
import { useEffect, useState } from 'react';
import { getNavers } from '../../hooks/getNavers';

import moment from 'moment';
import 'moment/locale/pt-br';
import api from '../../functions/api';
import Modal__Simple from '../Modal__Simple';

interface HandleNaverProps {
	title: string;
}

interface Naver {
	id: string;
	name: string;
	admission_date: string;
	job_role: string;
	user_id: string;
	project: string;
	birthdate: string;
	url: string;
}

export default function HandleNaver(props: HandleNaverProps) {
	const {query, route} = useRouter();

	const [name, setName] = useState('');
	const [jobRole, setJobRole] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [admissionDate, setAdmissionDate] = useState('');
	const [project, setProject] = useState('');
	const [url, setUrl] = useState('');

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	
	const {data} = getNavers<Naver>(`/navers/${query.id}`);
	
	function handleSaveNaver() {
		if(route == '/edit-naver/[id]') {
			api.put(`/navers/${query.id}`, {
				job_role: jobRole,
				admission_date: admissionDate,
				birthdate: birthDate,
				project: project,
				name: name,
				url: url
			}).then(function (response) {
				setIsModalOpen(true); 
			}).catch(function (error) {
				console.log(error, error.response);
				setIsErrorModalOpen(true);
			});

		} else if(route == '/add-naver') {
			console.log('Chegou aqui');
			
			api.post('/navers', {
				job_role: jobRole,
				admission_date: admissionDate,
				birthdate: birthDate,
				project: project,
				name: name,
				url: url
			}).then(function (response) {
				setIsModalOpen(true); 
			}).catch(function (error) {
				console.log(error, error.response);
				setIsErrorModalOpen(true);
			});
		}
	}
	
	useEffect(() => {
		if(route == '/edit-naver/[id]' && data) {

			setName(data.name);
			setJobRole(data.job_role);
			setBirthDate(moment(data.birthdate).locale('pt-br').fromNow(true));
			setAdmissionDate(moment(data.admission_date).locale('pt-br').fromNow(true));
			setProject(data.project);
			setUrl(data.url);

		} else if (route == '/add-naver') {

		}

	}, [data])

	function handleGoBack() {
		Router.push('/');
	}

	if(!data && route !== '/add-naver') {
		return null;
	}

	return(
		<HandleNaverWrapper>

			
			<HandleNaverContainer>
				<header onClick={handleGoBack} >
					<Image width="24" height="24" src="/chevron-left.svg" alt="Voltar"/>
					<h2>{props.title}</h2>
				</header>

				<div className="inputs">
					<Input 
						className="input"
						label="Nome"
						placeholder="Nome"
						value={name}
						onChange={e => setName(e.target.value)}
						/>
					
					<Input 
						className="input"
						label="Cargo"
						placeholder="Cargo"
						value={jobRole}
						onChange={e => setJobRole(e.target.value)}
						/>
					
					<Input 
						className="input"
						label="Idade"
						placeholder="Idade"
						// value={birthDate}
						// onChange={e => setBirthDate(e.target.value)}
						type="date"
						value={moment(birthDate || null, "DD/MM/YYYY").format('YYYY-MM-DD')}
						onChange={e => setBirthDate(moment(e.target.value, 'YYYY-MM-DD').format('DD/MM/YYYY'))}
						// maxLength={10}
						/>
					
					<Input 
						className="input"
						label="Tempo de empresa"
						placeholder="Tempo de empresa"
						// value={admissionDate}
						// onChange={e => setAdmissionDate(e.target.value)}
						
						type="date"
						value={moment(admissionDate || null, "DD/MM/YYYY").format('YYYY-MM-DD')}
						onChange={e => setAdmissionDate(moment(e.target.value, 'YYYY-MM-DD').format('DD/MM/YYYY'))}
						/>

					<Input 
						className="input"
						label="Projetos que participou"
						placeholder="Tempo de empresa"
						value={project}
						onChange={e => setProject(e.target.value)}
						/>

					<Input 
						className="input"
						label="URL da foto"
						placeholder="Tempo de empresa"
						value={url}
						onChange={e => setUrl(e.target.value)}
						/>
				</div>

				<button onClick={handleSaveNaver}>
					Salvar
				</button>
			</HandleNaverContainer>

			{isModalOpen && route == 'add-naver' &&
				<Modal__Simple 
					title="Naver criado"
					body="Naver criado com sucesso!"
					onClose={() => {
						setIsModalOpen(false);
						Router.push('/home');
					}}
				/>
			}
			
			{isModalOpen && route == '/edit-naver/[id]' &&
				<Modal__Simple 
					title="Naver atualizado"
					body="Naver atualizado com sucesso!"
					onClose={() => {
						setIsModalOpen(false);
						Router.push('/home');
					}}
				/>
			}

			{isErrorModalOpen && 
				<Modal__Simple 
					onClose={() => {
						setIsErrorModalOpen(false);
					}}
					title="Erro!"
					body="Erro ao tentar inserir ou atualizar Naver."
				/>
			}

		</HandleNaverWrapper>
	)
}
