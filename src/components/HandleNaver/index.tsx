import Router, { useRouter } from 'next/router';

import Image from 'next/image'

import Input from '../Input';
import {HandleNaverContainer, HandleNaverWrapper} from './styles';
import { useEffect, useState } from 'react';
import { getNavers } from '../../hooks/getNavers';

import moment from 'moment';
import 'moment/locale/pt-br';

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

	const {data} = getNavers<Naver>(`/navers/${query.id}`);

	const [name, setName] = useState('');
	const [jobRole, setJobRole] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [admissionDate, setAdmissionDate] = useState('');
	const [project, setProject] = useState('');
	const [url, setUrl] = useState('');
	
	useEffect(() => {
		if(data) {
			setName(data.name);
			setJobRole(data.job_role);
			setBirthDate(moment(data.birthdate).locale('pt-br').fromNow(true));
			setAdmissionDate(moment(data.admission_date).locale('pt-br').fromNow(true));
			setProject(data.project);
			setUrl(data.url);

			console.log(moment(data.birthdate, 'YYYY-MM-DD').format('DD/MM/YYYY'));
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
						onChange={e => setAdmissionDate(moment(e.target.value, 'YYYY-MM-DD').format('DD/MM/YYYY'))}
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

				<button>
					Salvar
				</button>
			</HandleNaverContainer>
		</HandleNaverWrapper>
	)
}
