import styled from 'styled-components';

export const ModalWrapper = styled.div`
	width: 100%;
	height: 100vh;
	
	position: fixed;
	top: 0;
	left: 0;
	z-index: 20;

	background-color: rgba(0, 0 ,0 ,0.8);

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContainer = styled.div`
	position: relative;
	
	background: #ffffff;

	padding: 3.2rem;

	width: 90%;
	max-width: 600px;

	height: auto;

	img {
		position: absolute;
		top: 1.5em;
		right: 2em;
		transition: 0.4s;

		cursor: pointer;
	}

	img:hover {
		transform: rotate(90deg);
	}

	h2 {
		
	}

	p {
		margin-top: 3em;
	}
`;