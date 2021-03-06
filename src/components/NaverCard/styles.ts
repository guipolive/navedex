import { fontWeight } from './../../styles/variables';
import styled from 'styled-components';

export const Naver = styled.article`
	height: 420px;
	width: 280px;

	.naver__image{
		width: 100%;
		height: 280px;

		object-fit: cover;
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
	}

	.naver__action + .naver__action {
		margin-left: 10px;
	}
`;