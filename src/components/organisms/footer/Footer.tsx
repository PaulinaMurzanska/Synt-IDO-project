import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../themes/MainTheme';
import { socials } from '../../../constants/Socials';

const StyledIconLink = styled.a`
	cursor: pointer;
	margin-right: 1.25rem;
	&:last-of-type {
		margin-right: 0;
	}
`;

const StyledIconsWrapper = styled.div`
	width: 100%;
	min-width: 22.5rem;
	height: 2.2rem;
	position: absolute;
	bottom: 2.5rem;
	left: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
const StyledIcon = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	background-color: ${theme.fontColorSecondary};
	color: black;
	font-size: 1.875rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Footer: React.FC = () => {
	return (
		<StyledIconsWrapper>
			{socials.map((item, index) => (
				<StyledIconLink href={item.url} target='blank' key={index}>
					<StyledIcon>{item.icon}</StyledIcon>
				</StyledIconLink>
			))}
		</StyledIconsWrapper>
	);
};

export default Footer;
