import { fontWeight } from './../variables';
import styled from "styled-components"

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

	p.error {
		color: red;
		margin: .5em 0;
		font-weight: ${fontWeight.bold}
	}

	button {
		margin-top: auto;
		width: 100%;
	}

	p.public-user {
		margin-top: auto;

		font-size: 10px;

		cursor: pointer;

		transition: .2s;

		text-decoration: underline;

		&:hover {
			transform: translateY(-1px);
		}
	}
`