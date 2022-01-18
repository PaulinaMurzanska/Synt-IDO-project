import React from 'react';
import styled from 'styled-components';
import { StyledParagraph } from '../../../../atoms/texts/StyledParagraph';
import { theme } from '../../../../../themes/MainTheme';
import IDObalanceBox from './IDObalanceBox';

const StyledIDObalanceBtn = styled.div`
	width: 100%;
	height: 5rem;
	border-radius: 5px;
	margin: 40px 0 24px;
	display: flex;
	flex-direction: column;
`;

const StyledIDObalanceBtnSmallInfos = styled.div`
	width: 100%;
	height: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.5rem;
`;

const IDOinMiddleBox: React.FC = () => {
	const dataEst = 56.0278;
	const dataBalance = 1004.5;

	return (
		<StyledIDObalanceBtn>
			<StyledIDObalanceBtnSmallInfos>
				<StyledParagraph
					size='0.875rem'
					color={theme.fontColorSecondary}
					lineHeight='0.875rem'
				>
					Est.: {dataEst}$
				</StyledParagraph>
				<StyledParagraph
					size='0.875rem'
					lineHeight='0.875rem'
					color={theme.fontColorSecondary}
				>
					Balance: {dataBalance} SOL
				</StyledParagraph>
			</StyledIDObalanceBtnSmallInfos>
			<IDObalanceBox />
		</StyledIDObalanceBtn>
	);
};

export default IDOinMiddleBox;
