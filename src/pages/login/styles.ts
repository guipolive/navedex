import { fontWeight } from './../../styles/variables';
import styled from "styled-components"
import {font} from '../../styles/variables';

export const LoginPage = styled.div`
	width: 100%;
	height: 100%;

	padding: 2em;

	display: flex;
	align-items: center;
	justify-content: center;

`

export const LoginContainer = styled.div`
	width: 100%;
	max-width: 420px;
	height: 380px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	border: 1px solid var(--color-black);

	padding: 2em 2em; 

	header {
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 80%;
		}
	}

	.inputs {
		width: 100%;
		margin: auto 0;
	}

	.input + .input {
		margin-top: 2em;
	}

	.input {
		
		label {
			display: block;
			
			margin-bottom: 4px;
			
			font-size: ${font.small};
			font-weight: ${fontWeight.bold};
		}

		input {
			padding: .7em .5em;
			width: 100%;
			border: 1px solid var(--color-black);
		}

	}

	button {
		width: 100%;
		padding: .7em .5em;
		background-color: var(--color-black);
		color: var(--color-white);
		border: 0;

		margin-top: auto;

		font-weight: ${fontWeight.bold};

		transition: transform .2s, box-shadow .2s;

		&:hover {
			transform: translateY(-2px);
			box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
		}
	}
`