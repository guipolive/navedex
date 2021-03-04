import {createGlobalStyle} from 'styled-components';

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
	}

	html, body, #root {
		height: 100%
	}

	body {
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}

	div#__next {
		height: 100%;
		width: 100%;
	}
`;
