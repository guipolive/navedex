import { fontWeight } from '../variables';
import styled from "styled-components"
import {font} from '../variables';

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

	.input {
		width: 100%;
	}

	.input + .input {
		margin-top: 2em;
	}

	button {
		margin-top: auto;
		width: 100%;
	}
`