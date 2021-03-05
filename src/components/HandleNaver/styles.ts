import { font, fontWeight, size } from './../../styles/variables';
import styled from 'styled-components';

export const HandleNaverWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;

	padding: 3em 2em;
`;

export const HandleNaverContainer = styled.section`
	width: 100%;
	max-width: 600px;

	header {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		width: fit-content;

		:hover {
			cursor: pointer;
		}

		img {
			width: 24px;
			height: 24px;
		}

		h2 {
			font-size: ${font.big};
			font-weight: ${fontWeight.bold};
			margin-left: 16px;
		}
	}

	.inputs {
		margin-top: 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1em;

		.input {
			@media(${size.desktop}) {
				flex-grow: 1;
				flex-wrap: nowrap;
				width: 45%;
			}
		}
	}

	button {
		margin-top: 32px;
		margin-left: auto;

		width: 100%;

		@media(${size.desktop}) {
			width: 180px;
		}
	}
`;
