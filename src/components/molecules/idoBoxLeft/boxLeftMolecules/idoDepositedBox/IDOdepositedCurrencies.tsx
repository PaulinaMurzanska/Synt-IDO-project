import React from 'react';
import styled from 'styled-components';
import { StyledLogoWrapper } from '../../../../atoms/logotypes/StyledLogoWrapper';
import { StyledParagraph } from '../../../../atoms/texts/StyledParagraph';
import logoImage from '../../../../../assets/logo/invariant-logob&w.png';
import { IDOcurencies } from '../../../../../constants/Currencies';
import { theme } from '../../../../../themes/MainTheme';

const StyledCurrencyWrapper = styled.div`
	width: 100%;
	height: 2rem;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	margin-top: 10px;
`;

const StyledContentWrapper = styled.div`
	margin-left: 1rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;
const StyledCurenciesWrapper = styled.ul`
	width: 100%;
	height: auto;
	list-style-type: none;
	display: flex;
	justify-content: flex-start;
	margin: 8px 0 16px;
	padding: 0;
`;
const StyledCurenciesItem = styled.li`
	margin-right: 0.75rem;
	@media (max-width: 960px) {
		margin-right: 0.5rem;
		&:last-of-type {
			margin-right: 0;
		}
		li {
			p {
				font-size: 0.635rem;
			}
		}
	}
`;

const IDOdepositedCurrencies: React.FC = () => {
	const deposit = 46.643;

	return (
		<StyledCurrencyWrapper>
			<StyledLogoWrapper
				logoImage={logoImage}
				width='2.5rem'
				height='1.875rem'
			/>
			<StyledContentWrapper>
				<StyledParagraph
					size='1.25rem'
					lineHeight='1.25rem'
					style={{ margin: '0' }}
				>
					{deposit} xUSD
				</StyledParagraph>
				<StyledCurenciesWrapper>
					{IDOcurencies.map((item) => (
						<StyledCurenciesItem key={item.name}>
							<StyledParagraph
								size='0.75rem'
								color={theme.fontColorSecondary}
								lineHeight='0.75rem'
								style={{ margin: '0', paddingLeft: '0' }}
							>
								{item.value.toFixed(3)} {item.name}
							</StyledParagraph>
						</StyledCurenciesItem>
					))}
				</StyledCurenciesWrapper>
			</StyledContentWrapper>
		</StyledCurrencyWrapper>
	);
};

export default IDOdepositedCurrencies;
