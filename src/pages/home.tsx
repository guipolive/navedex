import Router from 'next/router';

// Components
import Header from '../components/Header'
import { NaverCard } from '../components/NaverCard'
import Modal__Simple from '../components/Modal__Simple';

import {NaversListHeader, NaversList} from '../styles/pages/home';
import isAuthenticated from '../functions/isAuthenticated';
import { getNavers } from '../hooks/getNavers';
import { useEffect, useLayoutEffect, useState } from 'react';

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

export default function Home() {

	const {data} = getNavers<Naver[]>('/navers');

	function handleAddNaver() {
		Router.push('/add-naver');
	}

	if(!data) {
		return null;
	}

	return(
		<>
			<Header />

			<NaversListHeader>

				<h1>Navers</h1>

				<button onClick={handleAddNaver} >
					Adicionar Naver
				</button>
			</NaversListHeader>

			<NaversList>
				{data?.map(naver => (
					<NaverCard 
						id={naver.id}
						birthdate={naver.birthdate}
						project={naver.project}
						admission_date={naver.admission_date}
						key={naver.id}
						name={naver.name}
						job_role={naver.job_role}
						url={naver.url}
					/>
				))}
			</NaversList>

			{/* <Modal__Simple 
				title="Excluir naver"
				body="Tem certeza que deseja excluir esse naver?" 
			/> */}

			
		</>
	)
}

export async function getServerSideProps(ctx) {
  if (!isAuthenticated(ctx.req)) {
    ctx.res.writeHead(303, { Location: '/login' });
    ctx.res.end();
  }

  return { props: {} };
}
