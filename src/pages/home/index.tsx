import Router from 'next/router';
import Header from '../../components/Header'
import { NaverCard } from '../../components/NaverCard'

import {NaversListHeader, NaversList} from './styles';

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
		</>
	)
}