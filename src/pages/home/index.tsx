import Header from '../../components/Header'
import { NaverCard } from '../../components/NaverCard'

import {NaversListHeader, NaversList} from './styles';

export default function Home() {
	return(
		<>
			<Header />

			<NaversListHeader>

				<h1>Navers</h1>

				<button>
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