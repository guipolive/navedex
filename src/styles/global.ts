import {createGlobalStyle} from 'styled-components';

import { font, fontWeight } from './variables';

export default createGlobalStyle`
	:root {
		--color-black: black;
		--color-white: white;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
		font-family: 'Montserrat', sans-serif;
	}

	html, body, #root {
		height: 100%
	}

	body {
		-webkit-font-smoothing: antialiased;
		font-family: 'Montserrat', sans-serif;
		font-size: ${font.normal};
		font-weight: ${fontWeight.normal}
	}

	button {
		padding: .7em 1em;
		background-color: var(--color-black);
		color: var(--color-white);
		border: 0;

		cursor: pointer;

		font-weight: ${fontWeight.bold};

		transition: transform .2s, box-shadow .2s;

		&:hover {
			transform: translateY(-2px);
			box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
		}
	}

	div#__next {
		height: 100%;
		width: 100%;
	}

	h1 {
		font-size: ${font.bigger};
		font-weight: ${fontWeight.bold};
	}
`;
