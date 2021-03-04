import styled from "styled-components"
import {size} from '../../styles/sizes';

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
	}
`