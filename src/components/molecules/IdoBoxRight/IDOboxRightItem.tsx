import React from 'react';
import styled from 'styled-components';
import { StyledParagraph } from '../../atoms/texts/StyledParagraph';
import { theme } from '../../../themes/MainTheme';

interface Props {
	label: string;
	info: string;
	component: React.ReactNode;
}

const StyledInnerBox = styled.div`
	width: 100%;
	height: calc(100% / 5);
	background-color: #1c1b1e;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4.8px 0;
	&:nth-child(odd) {
		background-color: ${theme.backgroundDarkFaded};
	}
	&:first-child {
		border-radius: 10px 10px 0px 0px;
	}
	&:last-child {
		border-radius: 0px 0px 10px 10px;
	}
`;
const StyledInnerBoxBottomSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

const StyledIconComponentWrapper = styled.div`
	margin-right: 0.5rem;
	width: 1.25rem;
	height: 1.25rem;
	font-size: 1rem;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const IDOboxRightItem: React.FC<Props> = ({ label, info, component }) => {
	return (
		<StyledInnerBox>
			<StyledParagraph
				lineHeight='0.875rem'
				size='0.875rem'
				color={theme.fontColorSecondary}
				style={{ margin: '0' }}
			>
				{label}
			</StyledParagraph>
			<StyledInnerBoxBottomSection>
				<StyledIconComponentWrapper>
					{component}
				</StyledIconComponentWrapper>
				<StyledParagraph
					size='1.25rem'
					color='white'
					weight='600'
					lineHeight='1.25rem'
					style={{ margin: '0' }}
				>
					{info}
				</StyledParagraph>
			</StyledInnerBoxBottomSection>
		</StyledInnerBox>
	);
};

export default IDOboxRightItem;
