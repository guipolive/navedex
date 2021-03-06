import Router from 'next/router';

// Components
import Header from '../components/Header'
import { NaverCard } from '../components/NaverCard'
import Modal__Simple from '../components/Modal__Simple';

import {NaversListHeader, NaversList} from '../styles/pages/home';
import isAuthenticated from '../functions/isAuthenticated';

export default function Home() {
	function handleAddNaver() {
		Router.push('/add-naver');
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
				<NaverCard />
				<NaverCard />
				<NaverCard />
				<NaverCard />
				<NaverCard />
				<NaverCard />
				<NaverCard />
				<NaverCard />
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