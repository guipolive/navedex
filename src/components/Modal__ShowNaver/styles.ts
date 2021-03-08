import { size } from './../../styles/variables';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
	width: 100%;
	height: 100%;
	
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

	/* padding: 3.2rem; */

	width: 90%;
	max-width: 1000px;

	/* height: auto; */
	height: 600px;

	z-index: 30;

	img.close_button {
		position: absolute;
		top: 1.5em;
		right: 2em;
		transition: 0.2s;

		width: 1.5em;
		height: 1.5em;

		z-index: 130;

		@media(${size.mobile_only}) {
			background-color: white;
			border-radius: 5px;
		}

		cursor: pointer;
	}

	img.close_button:hover {
		transform: rotate(90deg);
	}

`;

export const ModalChildren = styled.div`
	height: 100%;
	width: 100%;

	position: relative;

	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-wrap: wrap;

	.naver-photo {
		height: 50%;
		width: 100%;

		object-fit: cover;

		@media(${size.desktop}) {
			width: 50%;
			height: 100%;
		}
	}

	.info {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;

		width: 100%;
		height: 50%;
		padding: 1em 1.5em;

		@media(${size.desktop}) {
			width: 50%;
			height: 100%;
			padding: 2em;
		}


		p {
			margin-top: .5em;
		}

		strong:first-of-type {
			margin-top: 1em;

			@media(${size.desktop}) {
				margin-top: 3em;
			}
		}

		strong:not(:first-of-type) {
			margin-top: .3em;
			
			@media(${size.desktop}) {
				margin-top: 2em;
			}
		}

		.actions {
			margin-top: auto;
		}
	}
`;