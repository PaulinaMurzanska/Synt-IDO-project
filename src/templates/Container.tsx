import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	max-width: 41.5rem;
	min-width: 22.5rem;
	height: auto;
	margin: 0 auto;
	@media (max-width: 960px) {
		width: 100vw;
		padding: 0 16px;
	}
	@media (max-width: 600px) {
		padding: 0 3.5rem;
	}
	@media (max-width: 450px) {
		padding: 0 1.25rem;
	}
`;

const Container: React.FC = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
