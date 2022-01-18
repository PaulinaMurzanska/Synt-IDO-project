import React from 'react';
import styled from 'styled-components';
import { StyledParagraph } from '../../../../atoms/texts/StyledParagraph';
import { theme } from '../../../../../themes/MainTheme';
import IdoSwitchButton from './IdoSwitchButton';

const StyledIDOsnyValueWrapper = styled.div`
	display: flex;
	width: 70%;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: 375px) {
		p {
			font-size: 1.25rem;
		}
	}
`;

const IdoSNYvalueWrapper: React.FC = () => {
	const exchangeRate = 0;
	const exchangeData = exchangeRate.toFixed(5);
	return (
		<StyledIDOsnyValueWrapper>
			<IdoSwitchButton />
			<StyledParagraph
				color={theme.fontColorSecondary}
				size='1.875rem'
				lineHeight='1.875rem'
				style={{ margin: '0' }}
			>
				{exchangeData}
			</StyledParagraph>
		</StyledIDOsnyValueWrapper>
	);
};

export default IdoSNYvalueWrapper;
