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

	.theme-changer {
		display: flex;
		align-items: center;
	}

	img.theme-icon {
		margin-left: 5px;
		width: 24px;
		height: 24px;

		transition: .2s;

		&:hover {
			transform: translateY(-2px);
		}
	}

`;