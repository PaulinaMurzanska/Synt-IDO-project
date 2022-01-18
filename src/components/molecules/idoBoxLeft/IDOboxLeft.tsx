import React from 'react';
import styled from 'styled-components';
import { StyledParagraph } from '../../atoms/texts/StyledParagraph';
import { theme } from '../../../themes/MainTheme';
import Button from '../../atoms/buttons/Button';
import IDOinMiddleBox from './boxLeftMolecules/IdoCenterBox/IDOinMiddleBox';
import IDOdepositedBox from './boxLeftMolecules/idoDepositedBox/IDOdepositedBox';

const StyledIDOboxLeft = styled.div`
	width: 60%;
	height: 100%;
	border-radius: 10px;
	background-color: ${theme.backgroundDarkFaded};
	margin-right: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 24px;
	@media (max-width: 600px) {
		width: 100%;
		margin-bottom: 1.5rem;
	}
	.connect-btn {
		&:hover {
			background: linear-gradient(
				180deg,
				rgba(239, 132, 245, 0.8) 0%,
				rgba(156, 62, 189, 0.8) 100%
			);
		}
	}
	p {
		margin: 0;
	}
`;

const IDOboxLeft: React.FC = () => {
	return (
		<StyledIDOboxLeft>
			<StyledParagraph size='1.56rem'>Deposit your SOL</StyledParagraph>
			<IDOinMiddleBox />
			<IDOdepositedBox />
			<Button
				customedBtn
				label='Connect a wallet'
				button={{ width: '100%' }}
				customClass='connect-btn'
			/>
		</StyledIDOboxLeft>
	);
};

export default IDOboxLeft;
