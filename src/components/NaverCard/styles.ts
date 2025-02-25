import { fontWeight } from './../../styles/variables';
import styled from 'styled-components';

export const Naver = styled.article`
	height: 420px;
	width: 280px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	.naver__image{
		width: 100%;
		height: 280px;

		cursor: pointer;

		object-fit: cover;

		transition: .2s;

		&:hover {
			transform: translateY(-2px);
		}
	}

	.naver__name {
		font-weight: ${fontWeight.bold};
		margin-top: 16px;
	}

	.naver__role {
		margin-top: 4px;
	}

	.naver__actions {
		margin-top: 10px;

		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.naver__action {
		width: 24px;
		height: 24px;

		transition: .2s;
	}

	.naver__action:hover {
		transform: translateY(-2px);
		cursor: pointer;
	}

	.naver__action + .naver__action {
		margin-left: 10px;
	}
`;