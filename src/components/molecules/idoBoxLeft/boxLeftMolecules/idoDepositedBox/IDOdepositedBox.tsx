import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../themes/MainTheme';
import { StyledParagraph } from '../../../../atoms/texts/StyledParagraph';
import IDOdepositedCurrencies from './IDOdepositedCurrencies';

const StyledWrapper = styled.div`
	width: 100%;
	height: auto;
	margin-bottom: 1.5rem;
`;

const IDOdepositedBox: React.FC = () => {
	return (
		<StyledWrapper>
			<StyledParagraph size='0.875rem' color={theme.fontColorSecondary}>
				Deposited amount:
			</StyledParagraph>
			<IDOdepositedCurrencies />
		</StyledWrapper>
	);
};

export default IDOdepositedBox;
