import styled from 'styled-components';
import { font, fontWeight } from '../../styles/variables';

export const InputContainer = styled.div`
	width: 100%;

	label {
		display: block;
		
		margin-bottom: 4px;
		
		font-size: ${font.small};
		font-weight: ${fontWeight.bold};
	}

	input {
		width: 100%;
		padding: .7em .5em;
		border: 1px solid var(--color-black);
	}
`;
