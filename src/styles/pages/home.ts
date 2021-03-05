import styled from 'styled-components';

export const NaversListHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 2em;
`;

export const NaversList = styled.div`
	width: 100%;

	padding: 2em;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;

	article {
		margin: 0 .5em;
	}
`;