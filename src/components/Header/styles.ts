import { fontWeight } from './../../styles/variables';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	width: 100%;
	padding: 2em;

	img {
		width: 145px;
		cursor: pointer;
	}

	p {
		cursor: pointer;
		font-weight: ${fontWeight.bold};
	}
`;