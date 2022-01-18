import React from 'react';
import styled from 'styled-components';
import { StyledParagraph } from '../../atoms/texts/StyledParagraph';
import IDOboxLeft from '../../molecules/idoBoxLeft/IDOboxLeft';
import IDOBoxRight from '../../molecules/IdoBoxRight/IDOBoxRight';

const StyledWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

const StyledIDOboxesWrapper = styled.div`
	width: 100%;
	height: 360px;
	display: flex;
	flex-direction: row;

	@media (max-width: 600px) {
		flex-direction: column;
		height: 100%;
	}
`;

const IDOcomponent: React.FC = () => {
	return (
		<StyledWrapper>
			<StyledParagraph size='1.25rem' lineHeight='2.5rem'>
				IDO
			</StyledParagraph>
			<StyledIDOboxesWrapper>
				<IDOboxLeft />
				<IDOBoxRight />
			</StyledIDOboxesWrapper>
		</StyledWrapper>
	);
};

export default IDOcomponent;
